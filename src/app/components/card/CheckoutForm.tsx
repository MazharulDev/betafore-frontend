"use client";

import { usePostPaymentMutation } from "@/redux/api/paymentApi";
import { useUserByEmailQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CheckoutForm = ({ product }: any) => {
  const router = useRouter();
  const { userId } = getUserInfo() as any;
  const { data: user } = useUserByEmailQuery(userId);
  const [cardError, setCardError] = useState<string | undefined>("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [postPayment] = usePostPaymentMutation();
  useEffect(() => {
    if (product?.price) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ price: product?.price }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data?.data);
        });
    }
  }, [product?.price]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    //confirm payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: userId,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      setCardError("");
      const paymentDataInsert = {
        name: user?.name,
        productName: product?.name,
        email: userId,
        transId: paymentIntent?.id,
        price: product?.price,
      };
      const res = await postPayment(paymentDataInsert).unwrap();
      if (res?._id) {
        router.push(`/success/${res?.transId}`);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="px-2 py-0 my-2 bg-green-500 rounded-md text-white hover:bg-green-600"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </>
  );
};

export default CheckoutForm;

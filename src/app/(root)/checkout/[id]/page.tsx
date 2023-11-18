"use client";

import CheckoutForm from "@/app/components/card/CheckoutForm";
import { stripePubKey } from "@/helpers/config/envConfig";
import { useProductByIdQuery } from "@/redux/api/productApi";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(stripePubKey());

type IDProps = {
  params: any;
};

const CheckOut = ({ params }: IDProps) => {
  const id = params?.id;
  const { data } = useProductByIdQuery(id);

  return (
    <div className="container mx-auto my-5">
      <div className="md:grid grid-cols-2 items-center w-fit container mx-auto gap-5">
        <div className="shadow hover:shadow-xl rounded-md bg-white mb-4 md:mb-0 box-border overflow-hidden w-96">
          <div className="box-border h-56 overflow-hidden cursor-pointer">
            <img
              className=" hover:scale-105 duration-300 h-full w-full"
              src={data?.image}
              alt=""
            />
          </div>
          <div className=" px-8 py-2">
            <h2 className="text-xl my-2 text-blue-500 font-semibold">
              {data?.name}
            </h2>
            <div className="flex items-center justify-between my-3">
              <h5 className="text-lg font-medium">
                Quantity: {data?.quantity}
              </h5>
            </div>

            <p className="text-2xl font-bold ">${data?.price}</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-md shadow-lg">
          <Elements stripe={stripePromise}>
            <CheckoutForm product={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

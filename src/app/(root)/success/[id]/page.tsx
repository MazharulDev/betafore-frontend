"use client";
import { usePaymentByIdQuery } from "@/redux/api/paymentApi";

type IDProps = {
  params: any;
};
const SuccessPage = ({ params }: IDProps) => {
  const transId = params?.id;
  const { data } = usePaymentByIdQuery(transId);
  console.log(data);
  return (
    <div>
      <h2>
        Congratulation, Your payment is successfull. your transactionID is{" "}
        {data?.transId}
      </h2>
    </div>
  );
};

export default SuccessPage;

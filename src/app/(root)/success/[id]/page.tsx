"use client";
import { usePaymentByIdQuery } from "@/redux/api/paymentApi";
import Image from "next/image";
import successImg from "@/app/assets/image/success.png";
import Link from "next/link";

type IDProps = {
  params: any;
};
const SuccessPage = ({ params }: IDProps) => {
  const transId = params?.id;
  const { data } = usePaymentByIdQuery(transId);
  return (
    <div className="container w-4/5 mx-auto shadow-xl p-10 my-10 rounded-lg">
      <h2 className="text-center text-3xl mt-10 text-green-500 font-bold">
        Congratulation, Payment is succeessful!!
      </h2>
      <div className="flex justify-center mt-10">
        <Image
          src={successImg}
          width={200}
          height={200}
          alt="Successful payment logo image"
        />
        ;
      </div>
      <div className="mt-14">
        <div className="flex justify-between  font-bold text-xl">
          <p>Name</p>
          <p>{data?.name}</p>
        </div>

        <div className="flex justify-between mt-4 font-bold text-xl">
          <p>Email</p>
          <p>{data?.email}</p>
        </div>
        <div className="flex justify-between mt-4 font-bold text-xl">
          <p>Product Name</p>
          <p>{data?.porductName}</p>
        </div>
        <div className="flex justify-between mt-4 my-3 font-bold text-2xl">
          <p>Total Paid</p>
          <p>{data?.price}$ </p>
        </div>
        <div className="flex justify-between mt-4 font-bold text-xl">
          <p>Transaction Id</p>
          <p className="text-blue-500">{data?.transId}</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8 mb-4 print:hidden">
          <button
            className="px-2 bg-green-500 rounded-md hover:bg-green-600 text-white"
            onClick={() => window.print()}
          >
            Print
          </button>
          <Link
            href="/"
            className="px-2 bg-red-500 rounded-md hover:bg-red-600 text-white"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

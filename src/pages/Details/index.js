import React from "react";
import receipt from "../../assets/images/receipt.jpg";
import ReceiptDetails from "../../Components/ReceiptDetails";
import { BiArrowBack } from "react-icons/bi";

export default function Details() {
  const receiptData = {
    mercant: "chicken republic",
    date: "july 23, 2020",
    amount: 1232.8,
    description: "",
    category: "Meals & Entertainment",
    method_of_payment: "card",
  };
  return (
    <div className='bg-gray-50 h-screen'>
      <div className='max-w-screen-sm mx-auto py-8 px-12'>
        <div className='flex items-center gap-3 textblue text-2xl my-12 font-semibold cursor-pointer'>
          <BiArrowBack size={22} />
          <p className='capitalize'>receipt details</p>
        </div>
        <div
          className='rounded-t-2xl'
          style={{
            background: `url(${receipt})`,
            width: "100%",
            backgroundPosition: "top",
            height: "25rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className='bg-white p-6 rounded-b-2xl drop-shadow-sm'>
          <ReceiptDetails
            key='mercant'
            title='mercant'
            name={receiptData.mercant}
          />
          <ReceiptDetails key='date' title='date' name={receiptData.date} />
          <ReceiptDetails key='total' title='total' name={receiptData.amount} />
          <ReceiptDetails
            key='description'
            title='description'
            name={receiptData.description}
          />
          <ReceiptDetails
            key='category'
            title='category'
            name={receiptData.category}
          />
          <ReceiptDetails
            key='method of payment'
            title='method of payment'
            name={receiptData.method_of_payment}
          />
          <div className='my-12'>
            <p className='text-2xl text-center text-red-600 font-bold'>
              Delete Receipt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

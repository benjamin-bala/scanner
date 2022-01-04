import React from "react";
import ReceiptCard from "../ReceiptCard";
import { BsCamera } from "react-icons/bs";

export default function Receipts() {
  return (
    <div className='mt-16'>
      <div className='flex items-center justify-between'>
        <h2 className='text-4xl font-semibold text-gray-800'>Receipts</h2>
      </div>

      <div className='flex gap-6 overflow-x-scroll py-6'>
        <div className='cursor-pointer flex shrink-0 flex-col justify-center items-center py-6 px-4 border border-gray-50 bg-gray-100 shadow-sm rounded-xl w-64 h-64'>
          <div className='border border-gray-400 p-6 rounded-full'>
            <BsCamera fill='#9ca3af' size={28} />
          </div>
          <div>
            <p className='my-3 text-xl text-gray-400 font-semibold'>
              Upload Receipt
            </p>
          </div>
        </div>
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
      </div>
    </div>
  );
}

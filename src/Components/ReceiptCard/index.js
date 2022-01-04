import React from "react";

export default function ReceiptCard() {
  return (
    <div className='flex shrink-0 flex-col justify-between py-6 px-4 border border-gray-50 bg-white drop-shadow-sm rounded-xl w-64 h-64'>
      <div>
        <p className='text-2xl text-gray-600'>July 23</p>
      </div>
      <div>
        <h3 className='text-3xl font-bold'>&#x20A6; 1,200.89</h3>
        <p className='text-xl'>Chicken republic</p>
      </div>
    </div>
  );
}

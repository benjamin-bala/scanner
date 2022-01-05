import React from "react";
import receipt from "../../assets/images/receipt.jpg";

export default function Card() {
  return (
    <div className='my-6 flex bg-white rounded-2xl drop-shadow-sm h-40 md:h-44'>
      <div className='w-44'>
        <img src={receipt} alt='' className='h-full rounded-l-2xl' />
      </div>
      <div className='flex flex-col justify-between flex-2 px-6 py-3 w-full'>
        <div className='flex justify-end'>
          <p className='border border-gray-300 rounded-xl px-6 py-1 text-sm md:text-xl'>
            Meals & Entertainment
          </p>
        </div>
        <div className='my-4'>
          <p className='text-lg md:text-xl capitalize'>Chicken republic</p>
          <p className='text-2xl md:text-3xl font-semibold'>&#x20A6;4,121.22</p>
        </div>
      </div>
    </div>
  );
}

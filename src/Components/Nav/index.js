import React from "react";
import { TiHome } from "react-icons/ti";
import { RiBillFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";

export default function Nav() {
  return (
    <div className='bg-white border-t-2 border-gray-100 fixed bottom-0 w-full px-6 py-8'>
      <div className='max-w-screen-sm mx-auto'>
        <div className='flex justify-around items-center bg-white'>
          <div className='flex flex-col items-center'>
            <TiHome size={28} fill='#404CCF' />
            <p className='text-xl md:text-2xl textblue font-semibold'>Home</p>
          </div>
          <div className='flex flex-col items-center'>
            <RiBillFill size={28} fill='#999' />
            <p className='text-xl md:text-2xl text-gray-400'>Expenses</p>
          </div>
          <div className='flex flex-col items-center'>
            <HiUser size={28} fill='#999' />
            <p className='text-xl md:text-2xl text-gray-400'>Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

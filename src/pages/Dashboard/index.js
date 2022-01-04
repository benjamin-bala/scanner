import React from "react";
import Receipts from "../../Components/Receipts";
import Reminder from "../../Components/Reminder";

export default function Dashboard() {
  return (
    <div>
      <div className='gradient'>
        <div className='max-w-screen-sm mx-auto py-8 px-12 flex flex-col justify-between md:justify-center'>
          <div className='my-4'>
            <h3 className='text-white text-3xl md:text-4xl font-semibold'>
              Welcome back, <br /> Benjee!
            </h3>
          </div>
          <div className='my-8 relative'>
            <div className='relative bg-white text-center flex flex-col justify-center items-center h-48 md:h-64 rounded-xl textblue z-20'>
              <p className='my-2 text-lg md:text-xl'>Today's expenditure</p>
              <h2 className='text-5xl font-bold'>
                <sup className='text-2xl text-semibold'>&#x20A6;</sup>
                220,679.07
              </h2>
            </div>
            <div className='z-0 absolute top-6 left-10 md:left-20 green-bg md:h-64 h-48 w-5/6 rounded-xl '></div>
          </div>
        </div>
      </div>
      <div className='max-w-screen-sm mx-auto py-8 px-12 flex flex-col justify-between md:justify-center'>
        <div className='my-6'>
          <Reminder />
          <Receipts />
        </div>
      </div>
    </div>
  );
}

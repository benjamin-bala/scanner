import React from "react";
import Button from "../../Components/Button";
import { MdOutlineReplay } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";

export default function Otp() {
  return (
    <div className='max-w-screen-sm mx-auto p-6 flex flex-col justify-between md:justify-center h-screen'>
      <div>
        <div className='flex items-center gap-3 textblue text-2xl my-12 font-semibold cursor-pointer'>
          <BiArrowBack size={22} />
          <p>Back</p>
        </div>

        <div className='text-center'>
          <h2 className='bold break-words text-4xl md:text-5x text-gray-900'>
            Please Enter <br /> OTP Verification
          </h2>
          <p className='text-gray-600 text-2xl my-3'>
            Code was sent to +234 8143 666*** <br />
            <span>
              This code will expire in{" "}
              <span className='text-red-600 font-bold'>03:48</span>
            </span>
          </p>
        </div>

        <div className='my-16'>
          <div className='flex items-center gap-12 justify-center'>
            <input
              type='password'
              className='rounded-xl py-4 px-2 w-20 md:w-24 h-20 md:h-24 text-center outline-none text-5xl bg-gray-200'
              maxLength={1}
            />
            <input
              type='password'
              className='rounded-xl py-4 px-2 w-20 md:w-24 h-20 md:h-24 text-center outline-none text-5xl bg-gray-200'
              maxLength={1}
            />
            <input
              type='password'
              className='rounded-xl py-4 px-2 w-20 md:w-24 h-20 md:h-24 text-center outline-none text-5xl bg-gray-200'
              maxLength={1}
            />
            <input
              type='password'
              className='rounded-xl py-4 px-2 w-20 md:w-24 h-20 md:h-24 text-center outline-none text-5xl bg-gray-200'
              maxLength={1}
            />
          </div>
          <div className='flex items-center justify-between mt-12'>
            <p className='text-xl'>Didn't receive an OTP?</p>
            <div className='flex items-center gap-1 textblue text-2xl font-bold cursor-pointer'>
              <MdOutlineReplay size={22} />
              <span>Resend</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button
          text='Verify and Create Account'
          bgcolor='blue-bg'
          textcolor='text-white'
        />
      </div>
    </div>
  );
}

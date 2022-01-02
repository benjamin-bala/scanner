import React from "react";
import Button from "../../Components/Button";
import Slide from "../../Components/Slide";
import "./onboarding.css";

export default function Onboarding() {
  return (
    <div className='blue-bg'>
      <div className='max-w-screen-sm mx-auto'>
        <div className='overflow-hidden flex flex-col justify-center items-center h-screen p-6'>
          <div className='my-6'>
            <Slide />
          </div>
          <div className='w-full'>
            <Button text='Get started' bgcolor='bgwhite' textcolor='textblue' />
            <Button
              text='Login'
              bgcolor='bgblue'
              textcolor='text-white'
              border='white'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

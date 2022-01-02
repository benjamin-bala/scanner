import React from "react";
import Input from "../../Components/Input";
import logo from "../../assets/images/Logo-color.svg";
import Button from "../../Components/Button";

export default function Login() {
  return (
    <div className='max-w-screen-sm mx-auto p-6 flex flex-col justify-center h-screen'>
      <div className='flex justify-center items-center py-6'>
        <img src={logo} alt='' />
      </div>
      <div className='my-8'>
        <Input type='email' placeholder='Enter Email Address' name='email' />
        <Input
          type='password'
          placeholder='Enter New Password'
          name='password'
        />
      </div>
      <div className=''>
        <Button text='Login' bgcolor='blue-bg' textcolor='text-white' />
        <div className='text-center text-xl'>
          <p className='my-5'>Forgot password?</p>
          <p>
            New User?{" "}
            <span className='font-semibold textblue'>Create Account</span>
          </p>
        </div>
      </div>
    </div>
  );
}

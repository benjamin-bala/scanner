import React from "react";
import Input from "../../Components/Input";
import logo from "../../assets/images/Logo-color.svg";
import Button from "../../Components/Button";

export default function Register() {
  return (
    <div className='max-w-screen-sm mx-auto p-6 flex flex-col justify-evenly h-screen'>
      <div className='flex justify-center items-center py-6'>
        <img src={logo} alt='' />
      </div>
      <div>
        <Input type='text' placeholder='Enter Full Name' name='Full Name' />
        <Input type='email' placeholder='Enter Email Address' name='email' />
        <Input type='text' placeholder='Enter Phone Number' name='phone' />
        <Input
          type='password'
          placeholder='Enter New Password'
          name='password'
        />
      </div>
      <div className=''>
        <Button text='Continue' bgcolor='blue-bg' textcolor='text-white' />
      </div>
    </div>
  );
}

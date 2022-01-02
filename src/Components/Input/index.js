import React from "react";

export default function Input(props) {
  return (
    <div className='flex flex-col my-6'>
      <label className='text-xl my-4 capitalize'>{props.name}</label>
      <input
        type={props.type || "text"}
        name={props.name || ""}
        placeholder={props.placeholder || ""}
        className='outline-none p-2 border-gray-400 text-lg textblue border-b-2'
      />
    </div>
  );
}

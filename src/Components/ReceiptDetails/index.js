import React from "react";

export default function ReceiptDetails(props) {
  return (
    <div className='my-6'>
      <p className='text-xl capitalize'>{props.title}</p>
      <p className='text-2xl darkblue border-b-2 border-gray-200 py-2 font-semibold capitalize'>
        {props.name}
      </p>
    </div>
  );
}

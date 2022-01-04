import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function List(props) {
  return (
    <div className='flex justify-between items-center my-8'>
      <div className='flex items-center gap-5'>
        <div>
          <label className='inline-flex items-center'>
            <input type='checkbox' className='checkbox' />
            <span className='checkmark'></span>
          </label>
        </div>
        <div>
          <h4 className='font-bold text-2xl'>{props.item.name}</h4>
          <p className='text-xl text-gray-400'>Due on {props.item.date}</p>
        </div>
      </div>
      <div>
        {props.item.isChecked ? <BsStarFill size={20} fill='#ffd700' /> : null}
      </div>
    </div>
  );
}

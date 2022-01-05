import React from "react";

export default function SearchBox() {
  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        className='rounded-3xl border border-gray-300 bg-white w-full px-6 py-4 text-2xl outline-none'
      />
    </div>
  );
}

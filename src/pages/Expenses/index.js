import React from "react";
import Card from "../../Components/Card";
import SearchBox from "../../Components/Searchbox";

export default function Expenses() {
  return (
    <div className='bg-gray-50 h-screen'>
      <div className='max-w-screen-sm mx-auto py-8 px-12'>
        <SearchBox />
        <div>
          <div>
            <h2 className='font-bold text-2xl my-4'>July 23</h2>
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <h2 className='font-bold text-2xl my-4'>July 22</h2>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

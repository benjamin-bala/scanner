import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import List from "../List";

export default function Reminder() {
  const listItems = [
    {
      name: "Get Receipts up-to-date",
      date: "july 29, 2020",
      isChecked: true,
    },
    {
      name: "Export Expenses Stats",
      date: "july 20, 2020",
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-4xl font-semibold text-gray-800'>Reminder</h2>
        <div>
          <MdOutlineAddBox size={28} fill='#999' />
        </div>
      </div>

      <div className='mt-8'>
        {listItems.map((item) => {
          return <List item={item} key={item.name} />;
        })}
      </div>
    </div>
  );
}

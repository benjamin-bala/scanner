import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${props.bgcolor || ""} ${props.textcolor || ""} ${
        props.border ? "border border-white" : null
      } text-2xl capitalize rounded-lg py-4 px-3 w-full my-4 font-semibold`}
    >
      {props.text || ""}
    </button>
  );
}

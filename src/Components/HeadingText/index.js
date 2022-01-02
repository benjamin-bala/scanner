import React from "react";

export default function HeadingText(props) {
  return (
    <h1 className={`bold text-4xl md:text-5xl ${props.color || ""}`}>
      {props.text}
    </h1>
  );
}

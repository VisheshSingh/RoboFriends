import React from "react";

export default function Scroll(props) {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "1px solid green",
        height: "800px"
      }}
    >
      {props.children}
    </div>
  );
}

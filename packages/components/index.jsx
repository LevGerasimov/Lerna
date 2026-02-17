import React from "react";

export const Button = ({ children }) => {
  return (
    <button style={{
      padding: "10px 20px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "8px"
    }} onClick={() => {console.log("test")}}> {children} </button>
  );
};
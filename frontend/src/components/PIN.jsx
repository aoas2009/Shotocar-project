import { useState } from "react";
import "./PIN.css";

function LockScreen() {
  return (
    <div className="flex gap-1">
      <InputBox />
      <InputBox />
      <InputBox />
      <p>-</p>
      <InputBox />
      <InputBox />
      <InputBox />
    </div>
  );
}

function InputBox() {
  return <input type="number" maxLength={1} className="bg-(--black-"/>;
}

export default LockScreen;

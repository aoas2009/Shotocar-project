import { useState } from "react";
import "./PIN.css";

function LockScreen() {
  return (
    <div className="flex gap-2 justify-stretch items-center">
      <div className="flex gap-x-3">
        <InputBox />
        <InputBox />
        <InputBox />
      </div>
      <div className="bg-(--gray-2) min-h-1.25 w-4 rounded-2xl"></div>
      <div className="flex gap-x-3">
        <InputBox />
        <InputBox />
        <InputBox />
      </div>
    </div>
  );
}

function InputBox() {
  return (
    <input
      type="text"
      maxLength={1}
      className="min-w-0 max-h-12 rounded-lg aspect-square bg-(--gray) border-3 border-(--gray-2) text-(--white-2)! text-center font-bold"
    />
  );
}

export default LockScreen;

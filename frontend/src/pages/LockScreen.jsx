import { useState } from "react";
import "./LockScreen.css";

import PIN from "../components/PIN";
import Button from "../components/Button";

function LockScreen() {
  return (
    <>
      <div></div>
      <div>
        <img src="" alt="" />
        <div>
          <h1>Olá!</h1>
          <PIN></PIN>
        </div>
        <Button />
      </div>
    </>
  );
}

export default LockScreen;

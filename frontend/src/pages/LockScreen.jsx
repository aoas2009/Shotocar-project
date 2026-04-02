import { useState } from "react";
import "./LockScreen.css";

import PIN from "../components/PIN";
import Button from "../components/Button";

function LockScreen() {
  return (
    <>
      <div></div>
      <div>
        <div>
          <h1>Olá!</h1>
          <PIN></PIN>
        </div>
      </div>

      <Button text={"Relembrar PIN"} icon={"paper-plane"} classes={"w-full"} />
    </>
  );
}

export default LockScreen;

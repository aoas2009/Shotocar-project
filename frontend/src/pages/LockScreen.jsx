import { useState } from "react";
import "./LockScreen.css";

import PIN from "../components/PIN";
import Button from "../components/Button";

function LockScreen() {
  return (
    <div className="flex">
      <div className="min-w-1/3">
        <p>Olao</p>
      </div>
      <div className="flex-col flex-1 h-lvh justify-center items-center">
        <div>
          <h1 className="font-bold text-4xl">Olá, Shoto</h1>
          <p className="sub-text font-semibold text-2xl">
            Insira seu PIN para prosseguir
          </p>
          <PIN></PIN>
        </div>
        <Button
          text={"Relembrar PIN"}
          icon={"paper-plane"}
          classes={"w-full"}
          size={"max-w-1/4"}
        />
      </div>
    </div>
  );
}

export default LockScreen;

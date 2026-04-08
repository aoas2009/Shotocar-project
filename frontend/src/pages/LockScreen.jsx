import { useState } from "react";
import "./LockScreen.css";

import PIN from "../components/PIN";
import Button from "../components/Button";
import Logo from "../components/Logo";

function LockScreen() {
  return (
    <div className="flex h-lvh items-center">
      <VehicleSlider track={1} />
      <div className="flex flex-col flex-1 h-5/6 items-center">
        <Logo size="2" classes="mb-20" />
        <div>
          <h1 className="font-bold text-4xl">Olá, Shoto</h1>
          <p className="sub-text font-semibold text-2xl mb-6">
            Insira seu PIN para prosseguir
          </p>
          <PIN />
        </div>
        <Button
          text={"Relembrar PIN"}
          icon={"paper-plane"}
          size={"max-w-1/4"}
          classes={"w-full mt-12"}
        />
      </div>
    </div>
  );
}

const bgImgs = {
  1: "vehicles/bg-1.png",
  2: "vehicles/bg-2.png",
  3: "vehicles/bg-3.png",
  4: "vehicles/bg-4.png",
  5: "vehicles/bg-5.png",
  6: "vehicles/bg-6.png",
  7: "vehicles/bg-7.png",
  8: "vehicles/bg-8.png",
  9: "vehicles/bg-9.png",
};

function VehicleSlider({ track }) {
  return (
    <section
      className={`min-w-5/9 h-full bg-[url('${bgImgs[track]}')] bg-center bg-cover bg-no-repeat rounded-br-2xl rounded-tr-2xl relative overlay`}
    ></section>
  );
}

export default LockScreen;

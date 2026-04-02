import { useState } from "react";
import { Component } from "react";

import Icon from "./Icon";
import { MissingPropError } from "@/js/error";

function Button({ text, color = "gray", icon, reverse = false, classes }) {
  if (!text) throw new MissingPropError("text", "Button")

  const flow = (reverse) ? "flex-row" : "flex-row-reverse";
  return (
    <button className={`flex ${flow} justify-center items-center bg-(--${color}) p-2 gap-1 rounded-md border-3 border-(--gray-2) ${classes || ""}`}>
      {icon && <Icon icon={icon} size={"small"} />}
      <span className="">{text}</span>
    </button>
  );
}

export default Button;

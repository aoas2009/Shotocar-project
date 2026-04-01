import { useState } from "react";
import "./Button.css";

function Button({ text, color, icon, reverse }) {
  return (
    <button className={(reverse) ? "flex-row-reverse" : "flex-row" + "justify-center items-center" + "bg-(--" + color + ")" }>
      {getIcon(icon)}
      <span>{text}</span>
    </button>
  );
}

function getIcon(icon) {
  switch (icon) {
    "atualizar":
      return ()
  }
}

export default Button;

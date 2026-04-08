import { MissingPropError } from "../js/error";

function Icon({ icon, size }) {
  if (!icon) throw new MissingPropError("icon", "Icon");
  else if (!size) throw new MissingPropError("size", "Icon");

  switch (size) {
    case "small":
      size = "size-4";
      break;

    case "medium": 
      size = "size-5";
      break;
    
      case "large": 
      size = "size-6";
      break;
  }

  const path = "src/assets/icons/" + icon + ".svg";
  return <img src={path} className={size} />;
}

export default Icon;

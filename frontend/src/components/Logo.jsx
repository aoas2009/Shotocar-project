const sizes = {
  1: "h-10",
  2: "h-12",
  3: "h-15",
  4: "h-20",
  5: "h-25",
  6: "h-30",
};

function Logo({ size = "md", classes }) {
  return <img className={`w-auto ${sizes[size]} ${classes}`} src="logo.png" />;
}

export default Logo;

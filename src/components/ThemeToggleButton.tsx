"use client";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <Button variant="ghost" onClick={toggleMode}>
      {theme === "dark" ? (
        <BsSun
          size={28}
          className="group-hover:scale-125 transition-transform text-[#8E9DB2]"
        />
      ) : (
        <BiMoon
          size={28}
          className="transition-transform group-hover:scale-125 "
        />
      )}
    </Button>
  );
};

export default ThemeToggleButton;

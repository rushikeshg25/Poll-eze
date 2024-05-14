import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./button";

const ThemeToggleText = () => {
  const { setTheme } = useTheme();
  const ThemeHandler = () => {
    setTheme((theme) => {
      if (theme === "dark") {
        return "light";
      }
      return "dark";
    });
  };

  return (
    <Button variant={"ghost"} onClick={ThemeHandler}>
      Toggle Theme
    </Button>
  );
};

export default ThemeToggleText;

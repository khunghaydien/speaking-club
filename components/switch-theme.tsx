"use client";
import { useTheme } from "next-themes";
import React from "react";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
import IconButton from "@mui/material/IconButton";
import { useMounted } from "./hook";

function SwitchTheme() {
  const mounted = useMounted();
  if (!mounted) return null;
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      onClick={handleThemeChange}
      color="inherit"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <NightlightTwoToneIcon color="primary" />
      ) : (
        <LightModeTwoToneIcon color="primary" />
      )}
    </IconButton>
  );
}

export default SwitchTheme;

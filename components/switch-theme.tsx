"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
import IconButton from "@mui/material/IconButton";

function SwitchTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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

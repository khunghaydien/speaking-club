"use client";
import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "next-themes";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    h1: { fontFamily: "var(--font-geist-mono), monospace" },
    h2: { fontFamily: "var(--font-geist-mono), monospace" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    h1: { fontFamily: "var(--font-geist-mono), monospace" },
    h2: { fontFamily: "var(--font-geist-mono), monospace" },
  },
});

function MUIProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme(); // Access the current theme from next-themes

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MUIProvider;

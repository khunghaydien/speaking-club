"use client";
import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "next-themes";

const getTheme = (mode: "dark" | "light") => {
  return createTheme({
    palette: {
      mode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "GeistMonoVF, Arial, sans-serif",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "GeistMonoVF, Arial, sans-serif",
            textTransform: "capitalize",
            fontWeight: "bold",
          },
        },
      },
    },
  });
};
function MUIProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme === "dark" ? "dark" : "light");
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MUIProvider;

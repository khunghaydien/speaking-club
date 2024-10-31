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
      MuiMenu: {
        styleOverrides: {
          paper: {
            marginBottom: "0.25rem",
            marginTop: "0.25rem",
            paddingInline: "0.25rem",
            "& li": {
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              "&:last-child": {
                marginBottom: "unset",
              },
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            width: "100%",
            paddingInline: "0.25rem",
          },
          listbox: {
            "& li": {
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              "&:last-child": {
                marginBottom: "unset",
              },
            },
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

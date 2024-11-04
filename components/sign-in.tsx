"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import React from "react";
import { useMounted } from "./hook";
function SignIn() {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <Button
      variant="contained"
      onClick={() => signIn("google", { callbackUrl: "/speaking-club" })}
    >
      Sign In
    </Button>
  );
}

export default SignIn;

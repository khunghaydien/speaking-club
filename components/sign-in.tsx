"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
function SignIn() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
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

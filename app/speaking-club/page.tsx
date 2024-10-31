import dynamic from "next/dynamic";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const SpeakingClub = dynamic(() => import("@/components/speaking-club"), {
  ssr: false,
  loading: () => (
    <Box className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-50 bg-muted-foreground/10">
      <CircularProgress color="primary" />
    </Box>
  ),
});

function page() {
  return <SpeakingClub />;
}

export default page;

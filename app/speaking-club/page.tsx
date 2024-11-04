import dynamic from "next/dynamic";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import MainHeader from "@/components/layout/main-header";

const SpeakingClub = dynamic(() => import("@/components/speaking-club"), {
  ssr: false,
  loading: () => (
    <Box className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-50 bg-muted-foreground/10">
      <CircularProgress color="primary" />
    </Box>
  ),
});

function page() {
  return (
    <div className="flex-grow h-full flex flex-col">
      <div className="flex items-center justify-center">
        <MainHeader />
      </div>
      <div className="bg-muted-foreground h-[0.5px]"></div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between gap-12 py-6 flex-grow max-w-[1400px]">
          <div className="w-full">
            <SpeakingClub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

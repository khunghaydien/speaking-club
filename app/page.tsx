import dynamic from "next/dynamic";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
const ListSignaling = dynamic(
  () => import("@/components/signaling/list-signaling"),
  {
    ssr: false,
    loading: () => (
      <Box className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-50 bg-white bg-opacity-80">
        <CircularProgress className="text-primary" />
      </Box>
    ),
  }
);

function page() {
  return (
    <div className="flex items-center justify-center w-full bg-muted">
      <section className="flex-grow h-full flex flex-col gap-1 py-6 pl-6 max-w-[1400px]">
        <ListSignaling />
      </section>
    </div>
  );
}

export default page;

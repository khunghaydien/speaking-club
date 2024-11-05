import { Box, CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";
const SpeakingRoom = dynamic(
  () => import("@/components/speaking-club/webrtc-speaking-room/speaking-room"),
  {
    ssr: false,
    loading: () => (
      <Box className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-50">
        <CircularProgress color="primary" />
      </Box>
    ),
  }
);

function page() {
  return <SpeakingRoom />;
}

export default page;

"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Box, IconButton } from "@mui/material";
import Mic from "@mui/icons-material/Mic";
import MicOff from "@mui/icons-material/MicOff";
import CallEnd from "@mui/icons-material/CallEnd";
import Videocam from "@mui/icons-material/Videocam";
import VideocamOff from "@mui/icons-material/VideocamOff";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeOff from "@mui/icons-material/VolumeOff";

const ListCallAction = ({
  isMuted,
  isBlind,
  isListen,
  setIsListen,
  setIsMuted,
  setIsBlind,
  handleEndCall,
}: {
  isMuted: boolean;
  isBlind: boolean;
  isListen?: boolean;
  setIsListen?: Dispatch<SetStateAction<boolean>>;
  setIsMuted?: Dispatch<SetStateAction<boolean>>;
  setIsBlind?: Dispatch<SetStateAction<boolean>>;
  handleEndCall?: () => void;
}) => {
  return (
    <Box className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
      {!!setIsListen && (
        <IconButton
          color="primary"
          onClick={() => setIsListen && setIsListen((prev) => !prev)}
          className="!bg-muted-foreground/10"
        >
          {isListen ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
      )}

      <IconButton
        disabled={!setIsMuted}
        color="primary"
        onClick={() => setIsMuted && setIsMuted((prev) => !prev)}
        className="!bg-muted-foreground/10"
      >
        {isMuted ? <MicOff /> : <Mic />}
      </IconButton>

      <IconButton
        disabled={!setIsBlind}
        color="primary"
        onClick={() => setIsBlind && setIsBlind((prev) => !prev)}
        className="!bg-muted-foreground/10"
      >
        {isBlind ? <VideocamOff /> : <Videocam />}
      </IconButton>

      {!!handleEndCall && (
        <IconButton
          color="primary"
          onClick={handleEndCall}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          <CallEnd />
        </IconButton>
      )}
    </Box>
  );
};

export default ListCallAction;

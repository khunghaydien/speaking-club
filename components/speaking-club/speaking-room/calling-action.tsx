"use client";
import React, { Dispatch, SetStateAction } from "react";
import { IconButton } from "@mui/material";
import Mic from "@mui/icons-material/Mic";
import MicOff from "@mui/icons-material/MicOff";
import CallEnd from "@mui/icons-material/CallEnd";
import Videocam from "@mui/icons-material/Videocam";
import VideocamOff from "@mui/icons-material/VideocamOff";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeOff from "@mui/icons-material/VolumeOff";

export const CallingAction = ({
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
    <div className="flex items-center justify-center w-full gap-3">
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
          sx={{
            color: "#ffffff",
          }}
          onClick={handleEndCall}
          className="bg-destructive hover:bg-destructive/90"
        >
          <CallEnd />
        </IconButton>
      )}
    </div>
  );
};

"use client";
import React from "react";
import { LocalStream } from "./webrtc-stream";

const WebrtcSpeakingRoom = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <LocalStream />
    </div>
  );
};
export default WebrtcSpeakingRoom;

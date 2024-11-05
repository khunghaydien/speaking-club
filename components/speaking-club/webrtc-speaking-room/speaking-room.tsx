"use client";
import React, { useEffect, useRef } from "react";
const constraints = {
  video: {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 480, ideal: 1080, max: 1080 },
  },
  audio: true,
};

const SpeakingRoom = () => {
  const localStreamRef = useRef<HTMLVideoElement | null>(null);
  const remoteStreamRef = useRef<HTMLVideoElement | null>(null);

  const getLocalStream = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia(constraints);
    if (localStream && localStreamRef.current) {
      localStreamRef.current.srcObject = localStream;
    }
  };

  useEffect(() => {
    getLocalStream();
  }, []);

  return (
    <div className="w-full h-full">
      <video ref={localStreamRef} autoPlay playsInline></video>
      <video
        ref={remoteStreamRef}
        autoPlay
        playsInline
        className="w-[300px] h-[270px] bg-black absolute top-0 left-0"
      ></video>
    </div>
  );
};

export default SpeakingRoom;

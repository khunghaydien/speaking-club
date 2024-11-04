"use client";
import { AccountCircle } from "@mui/icons-material";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
const useLocalStream = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { data } = useSession();

  useEffect(() => {
    const getLocalStream = async () => {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        setStream(localStream);
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    getLocalStream();
  }, []);

  return {
    stream,
    user: {
      image: data?.user?.image ?? "",
      name: data?.user?.name ?? "",
    },
  };
};

// Presentational component to display stream or fallback UI
const StreamDisplay: React.FC<{
  stream: MediaStream | null;
  user: { image: string; name: string };
  className?: string;
}> = ({ stream, user, className }) => {
  const streamRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (stream && streamRef.current) {
      streamRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <>
      {stream ? (
        <video
          ref={streamRef}
          autoPlay
          playsInline
          className={clsx(className)}
        ></video>
      ) : user?.image ? (
        <img src={user.image} alt={user.name ?? ""} />
      ) : (
        <AccountCircle
          sx={{ width: "50px", height: "50px" }}
          className="text-primary"
        />
      )}
    </>
  );
};

const LocalStream: React.FC = () => {
  const { stream, user } = useLocalStream();

  return <StreamDisplay stream={stream} user={user} />;
};

export { LocalStream };

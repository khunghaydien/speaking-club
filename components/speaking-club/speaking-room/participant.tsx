"use client";
import React from "react";
import { Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import clsx from "clsx";
import ListCallAction from "./list-call-action";

export type TParticipant = {
  id: string;
  name: string;
  image?: string;
  isMuted?: boolean;
  isBlind?: boolean;
  isListen?: boolean;
};

export const Participant = ({
  participant,
  onSelect,
  className,
}: {
  participant: TParticipant;
  onSelect: (participant: TParticipant) => void;
  className?: string;
}) => {
  const { isBlind, isMuted, image, name } = participant;
  return (
    <Box
      className={clsx(
        className,
        "flex items-center flex-col justify-center flex-grow rounded-md bg-muted-foreground/10 hover:bg-muted-foreground/20 cursor-pointer py-6"
      )}
    >
      <Box
        onClick={() => onSelect(participant)}
        className="flex items-center flex-col justify-center w-full h-full"
      >
        {isBlind ? (
          <video autoPlay muted={isMuted} />
        ) : image ? (
          <img src={image} alt={name} />
        ) : (
          <AccountCircle
            sx={{
              width: "50px",
              height: "50px",
            }}
            className="text-primary"
          />
        )}
        <Box className="text-center font-bold">{name}</Box>
      </Box>

      <ListCallAction isMuted={Boolean(isMuted)} isBlind={Boolean(isBlind)} />
    </Box>
  );
};

"use client";
import React from "react";
import { Box, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ListCallAction from "./list-call-action";
import {
  ArrowBackIosNewTwoTone,
  ArrowForwardIosTwoTone,
  CloseTwoTone,
} from "@mui/icons-material";
import Slider, { Settings } from "react-slick";
import clsx from "clsx";
import { ScrollArea } from "@/components/scroll-area";

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
        "flex items-center relative justify-center flex-grow rounded-md bg-muted-foreground cursor-pointer"
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
            style={{
              width: "50px",
              height: "50px",
            }}
            className="text-primary"
          />
        )}
        <Box className="text-center font-bold">{name}</Box>
      </Box>

      {/* Thanh điều khiển  */}
      <ListCallAction isMuted={Boolean(isMuted)} isBlind={Boolean(isBlind)} />
    </Box>
  );
};
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className=" top-1/2 right-0 transform -translate-y-1/2 bg-muted-foreground/10 hover:bg-muted-foreground/20"
      style={{ zIndex: 1, position: "absolute" }}
    >
      <ArrowForwardIosTwoTone />
    </IconButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className=" top-1/2 left-0 transform -translate-y-1/2 bg-muted-foreground/10 hover:bg-muted-foreground/20"
      style={{ zIndex: 1, position: "absolute" }}
    >
      <ArrowBackIosNewTwoTone />
    </IconButton>
  );
};

const settings: Settings = {
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ListParticipant = ({
  participants,
  onSelect,
  selectedParticipant,
}: {
  participants: TParticipant[];
  selectedParticipant?: TParticipant;
  onSelect: (participant?: TParticipant) => void;
}) => {
  return (
    <Box className="m-6">
      {selectedParticipant ? (
        <Box className="h-[calc(100vh-100px)] flex flex-col gap-6">
          <Box className="flex-shrink-0">
            <Slider {...settings}>
              {participants.map((participant: TParticipant) => {
                return (
                  <Participant
                    className="bg-muted-foreground h-[200px]"
                    participant={participant}
                    onSelect={onSelect}
                    key={participant.id}
                  />
                );
              })}
            </Slider>
          </Box>
          <Box className="h-full m-2 relative">
            <IconButton
              color="primary"
              onClick={() => onSelect()}
              style={{
                position: "absolute",
              }}
              className="top-1 right-1 z-10"
            >
              <CloseTwoTone />
            </IconButton>
            <Participant
              className="h-full"
              participant={selectedParticipant}
              onSelect={onSelect}
            />
          </Box>
        </Box>
      ) : (
        <ScrollArea
          style={{
            height: "calc(100vh - 100px)",
          }}
        >
          <Box className="flex flex-wrap gap-6 w-full h-full flex-grow">
            {participants.map((participant: TParticipant) => {
              return (
                <Participant
                  className="min-w-[360px] min-h-[300px]"
                  participant={participant}
                  onSelect={onSelect}
                  key={participant.id}
                />
              );
            })}
          </Box>
        </ScrollArea>
      )}
    </Box>
  );
};

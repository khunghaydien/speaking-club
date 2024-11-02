"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import { Box, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  ArrowBackIosNewTwoTone,
  ArrowForwardIosTwoTone,
  CloseTwoTone,
} from "@mui/icons-material";
import Slider, { Settings } from "react-slick";
import clsx from "clsx";
import { ScrollArea } from "@/components/scroll-area";
import { CallingAction } from "./speaking-room/calling-action";

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
    <div
      className={clsx(
        className,
        "flex items-center flex-col justify-center flex-grow rounded-md bg-muted-foreground/10 hover:bg-muted-foreground/20 cursor-pointer py-6"
      )}
    >
      <div
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
        <div className="text-center font-bold">{name}</div>
      </div>

      {/* Thanh điều khiển  */}
      <CallingAction isMuted={Boolean(isMuted)} isBlind={Boolean(isBlind)} />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className=" top-1/2 right-0 transform -translate-y-1/2 bg-muted-foreground/10 hover:bg-muted-foreground/20"
      sx={{ zIndex: 1, position: "absolute" }}
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
      sx={{ zIndex: 1, position: "absolute" }}
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
    <div>
      {selectedParticipant && participants.length > 1 ? (
        <div className="h-[calc(100vh-201px)] flex flex-col gap-6">
          <div className="flex-shrink-0">
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
          </div>
          <div className="h-full m-2 relative">
            <IconButton
              color="primary"
              onClick={() => onSelect()}
              sx={{
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
          </div>
        </div>
      ) : (
        <ScrollArea
          style={{
            height: "calc(100vh - 201px)",
          }}
        >
          <div className="flex flex-wrap gap-6 w-full h-full flex-grow">
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
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

const listParticipant = [
  { id: "1", name: "Người dùng 1" },
  { id: "2", name: "Người dùng 2" },
  { id: "3", name: "Người dùng 3" },
  { id: "4", name: "Người dùng 4" },
  { id: "5", name: "Người dùng 5" },
  { id: "6", name: "Người dùng 6" },
  { id: "7", name: "Người dùng 7" },
  { id: "8", name: "Người dùng 8" },
  { id: "9", name: "Người dùng 9" },
  { id: "10", name: "Người dùng 10" },
  { id: "11", name: "Người dùng 11" },
  { id: "12", name: "Người dùng 12" },
  { id: "13", name: "Người dùng 13" },
  { id: "14", name: "Người dùng 14" },
  { id: "15", name: "Người dùng 15" },
  { id: "16", name: "Người dùng 16" },
  { id: "17", name: "Người dùng 17" },
  { id: "18", name: "Người dùng 18" },
  { id: "19", name: "Người dùng 19" },
  { id: "20", name: "Người dùng 20" },
];

const SpeakingRoom: React.FC = () => {
  const [isBlind, setIsBlind] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isListen, setIsListen] = useState(true);
  const [selectedParticipant, setSelectedParticipant] =
    useState<TParticipant>();
  const handleEndCall = () => {};

  return (
    <div className="flex flex-col gap-6 py-6">
      <ListParticipant
        participants={listParticipant}
        selectedParticipant={selectedParticipant}
        onSelect={(participant?: TParticipant) =>
          setSelectedParticipant(participant)
        }
      />
      <CallingAction
        isMuted={isMuted}
        isBlind={isBlind}
        isListen={isListen}
        setIsListen={setIsListen}
        setIsMuted={setIsMuted}
        setIsBlind={setIsBlind}
        handleEndCall={handleEndCall}
      />
    </div>
  );
};

export default SpeakingRoom;

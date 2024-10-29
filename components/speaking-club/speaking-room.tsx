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
    <Box className="flex items-center justify-center w-full gap-3">
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
          className="bg-destructive hover:bg-destructive/90 text-white"
        >
          <CallEnd />
        </IconButton>
      )}
    </Box>
  );
};

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
    <Box>
      {selectedParticipant && participants.length > 1 ? (
        <Box className="h-[calc(100vh-112px)] flex flex-col gap-6">
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
            height: "calc(100vh - 112px)",
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
    <Box className="flex flex-col gap-6 py-6">
      <ListParticipant
        participants={listParticipant}
        selectedParticipant={selectedParticipant}
        onSelect={(participant?: TParticipant) =>
          setSelectedParticipant(participant)
        }
      />
      <ListCallAction
        isMuted={isMuted}
        isBlind={isBlind}
        isListen={isListen}
        setIsListen={setIsListen}
        setIsMuted={setIsMuted}
        setIsBlind={setIsBlind}
        handleEndCall={handleEndCall}
      />
    </Box>
  );
};

export default SpeakingRoom;

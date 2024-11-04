"use client";
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { CloseTwoTone } from "@mui/icons-material";
import Slider from "react-slick";
import { ScrollArea } from "@/components/scroll-area";
import { Participant, TParticipant } from "./participant";
import { settings } from "./slider-setting";
import ListCallAction from "./list-call-action";

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

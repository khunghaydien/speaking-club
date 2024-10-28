"use client";

import ListCallAction from "@/components/signaling/list-call-action";
import {
  ListParticipant,
  TParticipant,
} from "@/components/signaling/list-participant";
import React, { Fragment, useState } from "react";

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

const VideoCall: React.FC = () => {
  const [isBlind, setIsBlind] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isListen, setIsListen] = useState(true);
  const [selectedParticipant, setSelectedParticipant] =
    useState<TParticipant>();
  const handleEndCall = () => {};

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default VideoCall;

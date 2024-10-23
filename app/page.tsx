"use client";
import React, { forwardRef, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import Slider from "react-slick";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

type IParticipant = {
  id: string;
  name: string;
  image?: string;
  isVideo?: boolean;
  isAudio?: boolean;
  connectionStatus?: string;
  role?: "host" | "guest";
};

interface ParticipantProps {
  participant: IParticipant; // Ensure this imports correctly
}

const CommonParticipant = forwardRef<HTMLDivElement, ParticipantProps>(
  ({ participant }, ref) => {
    return (
      <div
        ref={ref}
        className="flex items-center justify-center relative w-full h-full"
      >
        {/* Conditional rendering for video or image */}
        {participant.isVideo ? (
          <video
            autoPlay
            muted={participant.isAudio}
            className="w-full h-full rounded-lg bg-gray-800 object-cover"
          />
        ) : (
          <img
            src={participant.image}
            alt={participant.name}
            className="w-full h-full rounded-lg bg-gray-800 object-cover"
          />
        )}

        {/* Settings icon */}
        <div className="absolute bottom-2 right-2">
          <IconButton size="small" className="text-white">
            <SettingsIcon />
          </IconButton>
        </div>

        {/* Muted and video icons at the bottom */}
        <div className="absolute bottom-0 flex justify-center space-x-2 mb-2">
          {participant.isAudio ? (
            <IconButton size="small" className="text-red-500" title="Muted">
              <VolumeUpIcon />
            </IconButton>
          ) : (
            <IconButton size="small" className="text-red-500" title="Muted">
              <VolumeOffIcon />
            </IconButton>
          )}
          {participant.isVideo ? (
            <IconButton size="small" className="text-red-500" title="No Video">
              <VideocamOffIcon />
            </IconButton>
          ) : (
            <IconButton size="small" className="text-red-500" title="No Video">
              <VideocamOffIcon />
            </IconButton>
          )}
        </div>

        {/* Participant's name */}
        <div className="text-center text-white mt-1">{participant.name}</div>
      </div>
    );
  }
);

CommonParticipant.displayName = "CommonParticipant";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700"
      style={{ zIndex: 1 }}
    >
      <ArrowForwardIosTwoToneIcon />
    </IconButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700"
      style={{ zIndex: 1 }}
    >
      <ArrowBackIosNewTwoToneIcon />
    </IconButton>
  );
};

interface ParticipantsListProps {
  participants: IParticipant[];
  onSelectParticipant: (participant: IParticipant) => void;
}
// Component danh sách người tham gia
const ParticipantsList: React.FC<ParticipantsListProps> = ({
  participants,
  onSelectParticipant,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 w-full h-full">
      {participants.map((participant) => (
        <CommonParticipant key={participant.id} participant={participant} />
      ))}
    </div>
  );
};

const VideoCall: React.FC = () => {
  const [micOn, setMicOn] = useState(true);
  const [volumeOn, setVolumeOn] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid"); // Mặc định là chế độ lưới
  const [selectedParticipant, setSelectedParticipant] =
    useState<IParticipant | null>(null); // Trạng thái cho người tham gia được chọn
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const participants = [
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

  const handleToggleMic = () => {
    setMicOn((prev) => !prev);
  };

  const handleToggleVolume = () => {
    setVolumeOn((prev) => !prev);
  };

  const handleEndCall = () => {
    console.log("Call Ended");
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
  };

  const handleSelectParticipant = (participant: IParticipant) => {
    setSelectedParticipant(participant);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className="relative w-full h-screen bg-black flex flex-col items-center justify-center">
      {/* Hiển thị người được chọn hoặc danh sách */}
      {selectedParticipant ? (
        <>
          <CommonParticipant participant={selectedParticipant} />

          {/* Danh sách người tham gia trong chế độ carousel */}
          <div className="w-full">
            <Slider {...settings}>
              {participants.map((participant) => (
                <CommonParticipant
                  key={participant.id}
                  participant={participant}
                />
              ))}
            </Slider>
          </div>
        </>
      ) : (
        // Danh sách người tham gia trong chế độ grid
        <ParticipantsList
          participants={participants}
          onSelectParticipant={handleSelectParticipant}
        />
      )}

      {/* Thanh điều khiển */}
      <Box className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
        <IconButton
          color="primary"
          onClick={toggleViewMode}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          {viewMode === "grid" ? <ViewListIcon /> : <ViewModuleIcon />}
        </IconButton>

        <IconButton
          color="primary"
          onClick={handleToggleVolume}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          {volumeOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>

        <IconButton
          color="primary"
          onClick={handleToggleMic}
          className="bg-gray-700 hover:bg-gray-600 text-white"
        >
          {micOn ? <MicIcon /> : <MicOffIcon />}
        </IconButton>

        <IconButton
          color="primary"
          onClick={handleEndCall}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          <CallEndIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoCall;

"use client";
import React, {
  Dispatch,
  forwardRef,
  Fragment,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { Box, IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { ScrollArea } from "./_component/scroll-area";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type IParticipant = {
  id: string;
  name: string;
  image?: string;
  isMuted?: boolean;
  isBlind?: boolean;
  isListen?: boolean;
};

interface ParticipantProps {
  participant: IParticipant; // Ensure this imports correctly
}

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
    <Box className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
      {!!setIsListen && (
        <IconButton
          color="primary"
          onClick={() => setIsListen && setIsListen((prev) => !prev)}
          className="!bg-gray-800 !text-white hover:bg-gray-700"
        >
          {isListen ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      )}

      <IconButton
        disabled={!setIsMuted}
        color="primary"
        onClick={() => setIsMuted && setIsMuted((prev) => !prev)}
        className="!bg-gray-800 !text-white hover:bg-gray-700"
      >
        {isMuted ? <MicOffIcon /> : <MicIcon />}
      </IconButton>

      <IconButton
        disabled={!setIsBlind}
        color="primary"
        onClick={() => setIsBlind && setIsBlind((prev) => !prev)}
        className="!bg-gray-800 !text-white hover:bg-gray-700"
      >
        {isBlind ? <VideocamOffIcon /> : <VideocamIcon />}
      </IconButton>

      {!!handleEndCall && (
        <IconButton
          color="primary"
          onClick={handleEndCall}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          <CallEndIcon />
        </IconButton>
      )}
    </Box>
  );
};

const CommonParticipant = forwardRef<HTMLDivElement, ParticipantProps>(
  ({ participant }, ref) => {
    return (
      <Box
        ref={ref}
        className="flex items-center justify-center relative flex-grow rounded-md bg-background/10 min-w-[360px] min-h-[300px]"
      >
        <Box>
          {participant?.isBlind ? (
            <video
              autoPlay
              muted={participant?.isMuted}
              className="w-full h-full text-gray-500"
            />
          ) : participant.image ? (
            <img
              src={participant.image}
              alt={participant.name}
              className="w-full h-full text-gray-500"
            />
          ) : (
            <AccountCircleIcon className="w-full h-full text-gray-500 max-w-[100px] max-height-[100px]" />
          )}
          <Box className="text-center text-white mt-1">{participant.name}</Box>
        </Box>

        {/* Thanh điều khiển  */}
        <ListCallAction
          isMuted={Boolean(participant?.isMuted)}
          isBlind={Boolean(participant?.isBlind)}
        />
      </Box>
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
    <Fragment>
      {participants.map((participant) => (
        <CommonParticipant key={participant.id} participant={participant} />
      ))}
    </Fragment>
  );
};

const VideoCall: React.FC = () => {
  const [isBlind, setIsBlind] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isListen, setIsListen] = useState(true);
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

  const handleEndCall = () => {
    console.log("Call Ended");
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
    <Box className="relative w-full h-screen bg-black flex flex-col items-center p-6">
      <ScrollArea
        style={{
          height: "calc(100vh - 100px)",
        }}
        className="max-w-[1366px] w-screen px-3"
      >
        <Box className="flex flex-wrap gap-6 w-full h-full flex-grow">
          <ParticipantsList
            participants={participants}
            onSelectParticipant={handleSelectParticipant}
          />
        </Box>
        {/* Hiển thị người được chọn hoặc danh sách */}
        {/* {selectedParticipant ? (
          <>
            <CommonParticipant participant={selectedParticipant} />
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
          <ParticipantsList
            participants={participants}
            onSelectParticipant={handleSelectParticipant}
          />
        )} */}
      </ScrollArea>

      {/* Thanh điều khiển */}

      <ListCallAction
        isListen={isListen}
        isMuted={isMuted}
        isBlind={isBlind}
        setIsListen={setIsListen}
        setIsMuted={setIsMuted}
        setIsBlind={setIsBlind}
        handleEndCall={handleEndCall}
      />
    </Box>
  );
};

export default VideoCall;

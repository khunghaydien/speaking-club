import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import CloseTwoTone from "@mui/icons-material/CloseTwoTone";
const maximumParticipant = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "Infinity", value: 10 },
];
const language = [];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateSpeakingRoom() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Speaking Room
      </Button>
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "100%", maxWidth: "700px" } }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <form className="flex flex-col gap-6 p-6">
          <Box className="flex items-center justify-between gap-6">
            <Box className="font-bold text-lg">Create Speaking Room</Box>
            <IconButton color="default" onClick={handleClose}>
              <CloseTwoTone />
            </IconButton>
          </Box>

          <Box className="flex gap-6 items-center w-full">
            <Box className="flex flex-grow">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                label="Name"
              />
            </Box>
            <Autocomplete
              size="small"
              options={maximumParticipant}
              sx={{ minWidth: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Maximum Participant" />
              )}
            />
          </Box>
          <Box className="flex gap-6 items-center w-full">
            <Autocomplete
              size="small"
              options={maximumParticipant}
              sx={{ minWidth: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Maximum Participant" />
              )}
            />
            <Autocomplete
              size="small"
              options={maximumParticipant}
              sx={{ minWidth: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Maximum Participant" />
              )}
            />
          </Box>
          <Box className="flex items-center justify-end gap-3">
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

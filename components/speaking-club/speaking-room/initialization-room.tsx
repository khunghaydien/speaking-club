import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, IconButton } from "@mui/material";
import CloseTwoTone from "@mui/icons-material/CloseTwoTone";
import { useFormik } from "formik";
import { languages, levels, maximumParticipants } from "../const";
import { initializationRoomValidation } from "../formik";
import CommonInput from "@/components/input/common-input";
import CommonSelect from "@/components/input/common-select";
import NextImage from "next/image";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InitializationRoom = React.memo(() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      language: null,
      level: null,
      maximumParticipant: null,
    },
    validationSchema: initializationRoomValidation,
    onSubmit: () => {},
  });

  const { values, setFieldValue, errors, touched } = formik;

  const onChangeValue = (value: unknown, keyname: string) => {
    setFieldValue(keyname, value);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
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
        <Box
          component={"form"}
          className="flex flex-col px-6 py-3 gap-8"
          onSubmit={formik.handleSubmit}
        >
          <Box className="flex items-center justify-between gap-6">
            <Box className="font-bold text-lg">Create Speaking Room</Box>
            <IconButton color="default" onClick={handleClose}>
              <CloseTwoTone />
            </IconButton>
          </Box>
          <Box className="flex gap-6 items-center w-full">
            <CommonInput
              label="Name"
              value={values.name}
              error={!!errors.name && !!touched.name}
              helperText={!!errors.name && !!touched.name && errors.name}
              onChange={(e) => onChangeValue(e.target.value, "name")}
            />
            <CommonSelect
              options={maximumParticipants}
              value={values.maximumParticipant}
              onChange={(_event, value) =>
                onChangeValue(value, "maximumParticipant")
              }
              label="Maximum Participant"
              error={
                !!errors.maximumParticipant && !!touched.maximumParticipant
              }
              helperText={
                !!errors.maximumParticipant &&
                !!touched.maximumParticipant &&
                errors.maximumParticipant
              }
            />
          </Box>
          <Box className="flex gap-6 items-center w-full">
            <CommonSelect
              label="Language"
              error={!!errors.language && !!touched.language}
              helperText={
                !!errors.language && !!touched.language && errors.language
              }
              options={languages}
              value={values.language}
              onChange={(_event, value) => setFieldValue("language", value)}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box
                    key={key}
                    component={"li"}
                    {...optionProps}
                    sx={{
                      display: "flex",
                      gap: (theme) => theme.spacing(1),
                      alignItems: "center",
                    }}
                  >
                    <NextImage
                      src={option.image ?? ""}
                      alt={option.label}
                      width={20}
                      height={12}
                    />
                    {option.label}
                  </Box>
                );
              }}
            />
            <CommonSelect
              label="Level"
              options={levels}
              value={values.level}
              onChange={(_event, value) => onChangeValue(value, "level")}
              error={!!errors.level && !!touched.level}
              helperText={!!errors.level && !!touched.level && errors.level}
            />
          </Box>
          <Box className="flex items-center justify-end gap-3">
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
});
export default InitializationRoom;

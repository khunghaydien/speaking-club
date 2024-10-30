import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import CloseTwoTone from "@mui/icons-material/CloseTwoTone";
import { useFormik } from "formik";
import { languages, levels, maximumParticipants, TOption } from "./const";
import { createSpeakingRoomValidation } from "./formik";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateSpeakingRoom = React.memo(() => {
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
    validationSchema: createSpeakingRoomValidation,
    onSubmit: () => {},
  });

  const { values, setFieldValue, errors, touched } = formik;

  const onChangeValue = (value: string | TOption | null, keyname: string) => {
    setFieldValue(keyname, value);
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
        <form
          className="flex flex-col gap-6 p-6"
          onSubmit={formik.handleSubmit}
        >
          <Box className="flex items-center justify-between gap-6">
            <Box className="font-bold text-lg">Create Speaking Room</Box>
            <IconButton color="default" onClick={handleClose}>
              <CloseTwoTone />
            </IconButton>
          </Box>

          <Box className="flex gap-6 items-center w-full mb-6">
            <Box className="flex flex-grow">
              <TextField
                value={values.name}
                error={!!errors.name && !!touched.name}
                helperText={!!errors.name && !!touched.name && errors.name}
                FormHelperTextProps={{
                  className: "error-message !m-0 !absolute !top-10",
                }}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => onChangeValue(e.target.value, "name")}
                variant="outlined"
                size="small"
                fullWidth
                label="Name"
              />
            </Box>
            <Autocomplete
              size="small"
              options={maximumParticipants}
              value={values.maximumParticipant}
              onChange={(_event, value) =>
                onChangeValue(value, "maximumParticipant")
              }
              sx={{ minWidth: 250 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Maximum Participant"
                  error={
                    !!errors.maximumParticipant && !!touched.maximumParticipant
                  }
                  helperText={
                    !!errors.maximumParticipant &&
                    !!touched.maximumParticipant &&
                    errors.maximumParticipant
                  }
                  FormHelperTextProps={{
                    className: "error-message !m-0 !absolute !top-10",
                  }}
                />
              )}
            />
          </Box>
          <Box className="flex gap-6 items-center w-full">
            <Autocomplete
              size="small"
              fullWidth
              options={languages}
              autoHighlight
              value={values.language}
              onChange={(_event, value) => setFieldValue("language", value)}
              getOptionLabel={(option: TOption) => option.label}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box
                    key={key}
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...optionProps}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.icon}.png`}
                      alt={`${option.label} flag`}
                    />
                    {option.label}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Language"
                  inputProps={{
                    ...params.inputProps,
                  }}
                  error={!!errors.language && !!touched.language}
                  helperText={
                    !!errors.language && !!touched.language && errors.language
                  }
                  FormHelperTextProps={{
                    className: "error-message !m-0 !absolute !top-10",
                  }}
                />
              )}
            />
            <Autocomplete
              size="small"
              fullWidth
              options={levels}
              value={values.level}
              onChange={(_event, value) => onChangeValue(value, "level")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Level"
                  error={!!errors.level && !!touched.level}
                  helperText={!!errors.level && !!touched.level && errors.level}
                  FormHelperTextProps={{
                    className: "error-message !m-0 !absolute !top-10",
                  }}
                />
              )}
            />
          </Box>

          <Box className="flex items-center justify-end gap-3">
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Dialog>
    </React.Fragment>
  );
});
export default CreateSpeakingRoom;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, IconButton } from "@mui/material";
import CloseTwoTone from "@mui/icons-material/CloseTwoTone";
import { useFormik } from "formik";
import { initializationRoomValidation } from "../formik";
import CommonInput from "@/components/input/common-input";
import CommonSelect from "@/components/input/common-select";
import NextImage from "next/image";
import { languages, levels, maximumParticipants } from "@/const";

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
  const top100Films = [
    { label: "The Shawshank Redemption", value: 1994 },
    { label: "The Godfather", value: 1972 },
    { label: "The Godfather: Part II", value: 1974 },
    { label: "The Dark Knight", value: 2008 },
    { label: "12 Angry Men", value: 1957 },
    { label: "Schindler's List", value: 1993 },
    { label: "Pulp Fiction", value: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      value: 2003,
    },
    { label: "The Good, the Bad and the Ugly", value: 1966 },
    { label: "Fight Club", value: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      value: 2001,
    },
  ];
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
        <form
          className="flex flex-col px-6 py-3 gap-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex items-center justify-between gap-6">
            <div className="font-bold text-lg">Create Speaking Room</div>
            <IconButton color="default" onClick={handleClose}>
              <CloseTwoTone />
            </IconButton>
          </div>
          <div className="flex gap-6 items-center w-full">
            <CommonInput
              required
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
          </div>
          <div className="flex gap-6 items-center w-full">
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
          </div>
          <CommonSelect
            multiple
            label="Phim"
            limitTags={2}
            id="multiple-limit-tags"
            options={top100Films}
            sx={{ width: "500px" }}
          />

          <div className="flex items-center justify-end gap-3">
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
});
export default InitializationRoom;

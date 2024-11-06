import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, IconButton } from "@mui/material";
import CloseTwoTone from "@mui/icons-material/CloseTwoTone";
import { useFormik } from "formik";
import CommonInput from "@/components/input/common-input";
import CommonSelect from "@/components/input/common-select";
import NextImage from "next/image";
import { useGenerateOption } from "@/consts";
import { createSpeakingRoomValidation } from "@/validations";
import { useMutation } from "@apollo/client";
import { CREATE_SPEAKING_ROOM } from "@/graphql/mutation/speaking-club";
import { scrollToFirstElement } from "@/services";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateSpeakingRoom = React.memo(() => {
  const { levelOptions, typeOptions, languageOptions } = useGenerateOption();
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
      type: null,
    },
    validationSchema: createSpeakingRoomValidation,
    onSubmit: (values) => {
      setTimeout(() => {
        scrollToFirstElement("error-message-scroll");
      });
      handleSubmit(values);
    },
  });

  const { values, setFieldValue, errors, touched } = formik;

  const onChangeValue = (value: unknown, keyname: string) => {
    setFieldValue(keyname, value);
  };

  const [createSpeakingRoom] = useMutation(CREATE_SPEAKING_ROOM);

  const handleSubmit = async (values: any) => {
    try {
      await createSpeakingRoom({
        variables: {
          createSpeakingRoomDto: {
            name: values.name,
            level: values.level.value,
            language: values.language.value,
            type: values.type.value,
          },
        },
      });
    } catch (error) {}
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
              helperText={
                !!errors.name && !!touched.name && (errors.name as string)
              }
              onChange={(e) => onChangeValue(e.target.value, "name")}
            />
            <CommonSelect
              options={typeOptions}
              value={values.type}
              onChange={(_event, value) => onChangeValue(value, "type")}
              label="Maximum Participant"
              error={!!errors.type && !!touched.type}
              helperText={
                !!errors.type && !!touched.type && (errors.type as string)
              }
            />
          </div>
          <div className="flex gap-6 items-center w-full">
            <CommonSelect
              label="Language"
              error={!!errors.language && !!touched.language}
              helperText={
                !!errors.language &&
                !!touched.language &&
                (errors.language as string)
              }
              options={languageOptions}
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
              options={levelOptions}
              value={values.level}
              onChange={(_event, value) => onChangeValue(value, "level")}
              error={!!errors.level && !!touched.level}
              helperText={
                !!errors.level && !!touched.level && (errors.level as string)
              }
            />
          </div>
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
export default CreateSpeakingRoom;

"use client";
import React from "react";
import { ScrollArea } from "@/components/scroll-area";
import { Box, InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Link from "next/link";
import CreateSpeakingRoom from "./create-speaking-room";
import { useFormik } from "formik";

function SpeakingClub() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: () => {},
  });

  const { values, setFieldValue } = formik;

  // Move the handleChange function outside of the render
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFieldValue("name", e.target.value);
  };

  return (
    <form className="py-6" onSubmit={formik.handleSubmit}>
      <Box className="flex flex-col gap-6 flex-grow">
        <Box className="flex justify-between gap-6 items-center pr-6">
          <Box className="max-w-[600px] w-full">
            <TextField
              label="Search"
              size="small"
              fullWidth
              value={values.name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className="flex justify-end w-full">
            <CreateSpeakingRoom />
          </Box>
        </Box>
        <ScrollArea style={{ height: "calc(100vh - 112px)" }} className="pr-6">
          <Link className="card" href={`/speaking-club/${1}`} passHref>
            Speaking Club
          </Link>
        </ScrollArea>
      </Box>
    </form>
  );
}

export default SpeakingClub;

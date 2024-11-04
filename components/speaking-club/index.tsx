"use client";
import React from "react";
import { ScrollArea } from "@/components/scroll-area";
import { Box, InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Link from "next/link";
import { useFormik } from "formik";
import InitializationRoom from "./speaking-room/initialization-room";

function SpeakingClub() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: () => {},
  });

  const { values, setFieldValue } = formik;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFieldValue("name", e.target.value);
  };

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      <Box className="flex flex-col gap-6 flex-grow">
        <Box className="flex justify-between gap-6 items-center">
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
            <InitializationRoom />
          </Box>
        </Box>
        <ScrollArea style={{ height: "calc(100vh - 177px)" }} className="pr-6">
          <Link className="card" href={`/speaking-club/${1}`} passHref>
            Speaking Club
          </Link>
        </ScrollArea>
      </Box>
    </Box>
  );
}

export default SpeakingClub;

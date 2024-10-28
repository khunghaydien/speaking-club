"use client";
import React from "react";
import { ScrollArea } from "@/components/scroll-area";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useFormik } from "formik";
import Search from "@mui/icons-material/Search";

function ListSignaling() {
  const formik = useFormik({
    initialValues: {
      keyname: "",
    },
    onSubmit: () => {},
  });

  const { values, setFieldValue } = formik;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};

  return (
    <form className="flex items-start gap-12">
      <Box className="flex flex-col gap-6 flex-grow">
        <Box className="flex justify-between gap-6 items-center pr-6">
          <Box className="max-w-[600px] w-full">
            <TextField
              label="Search"
              size="small"
              fullWidth
              onChange={onChange}
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
            <Button
              variant="contained"
              color="primary"
              style={{ height: "40px" }}
            >
              Create Room
            </Button>
          </Box>
        </Box>
        <ScrollArea style={{ height: "calc(100vh - 112px)" }} className="pr-6">
          <Box className="flex flex-col gap-3">
            {/* Add your list or content here */}
          </Box>
        </ScrollArea>
      </Box>
    </form>
  );
}

export default ListSignaling;

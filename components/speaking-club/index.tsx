"use client";
import React from "react";
import { ScrollArea } from "@/components/scroll-area";
import { InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Link from "next/link";
import { useFormik } from "formik";
import CreateSpeakingRoom from "./create-speaking-room";
import { useTranslations } from "next-intl";

function SpeakingClub() {
  const t = useTranslations("HomePage");
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
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-6 flex-grow">
        <div className="flex justify-between gap-6 items-center">
          <div className="max-w-[600px] w-full">
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
          </div>
          <div className="flex justify-end w-full">
            <CreateSpeakingRoom />
          </div>
        </div>
        <ScrollArea style={{ height: "calc(100vh - 177px)" }} className="pr-6">
          <Link className="card" href={`/speaking-club/${1}`} passHref>
            {t("title")}
          </Link>
        </ScrollArea>
      </div>
    </form>
  );
}

export default SpeakingClub;

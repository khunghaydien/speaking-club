"use client";
import React from "react";
import { IconButton } from "@mui/material";
import {
  ArrowBackIosNewTwoTone,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material";
import { Settings } from "react-slick";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className=" top-1/2 right-0 transform -translate-y-1/2 bg-muted-foreground/10 hover:bg-muted-foreground/20"
      sx={{ zIndex: 1, position: "absolute" }}
    >
      <ArrowForwardIosTwoTone />
    </IconButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className=" top-1/2 left-0 transform -translate-y-1/2 bg-muted-foreground/10 hover:bg-muted-foreground/20"
      sx={{ zIndex: 1, position: "absolute" }}
    >
      <ArrowBackIosNewTwoTone />
    </IconButton>
  );
};

export const settings: Settings = {
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

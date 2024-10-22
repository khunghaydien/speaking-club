"use client";
import { IconLoading } from "@/components/icon";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the components
const ListCommunity = dynamic(() => import("@/components/comunity/list"), {
  loading: () => <IconLoading className="animate-spin text-primary" />,
});

const OptionCommunity = dynamic(() => import("@/components/comunity/option"), {
  loading: () => <IconLoading className="animate-spin text-primary" />,
});

const FilterCommunity = dynamic(() => import("@/components/comunity/filter"), {
  loading: () => <IconLoading className="animate-spin text-primary" />,
});

const page = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <section className="flex-grow h-full flex flex-col gap-1 py-6 pl-6 max-w-[1240px]">
        <OptionCommunity />
        <FilterCommunity />
        <ListCommunity />
      </section>
    </div>
  );
};

export default page;

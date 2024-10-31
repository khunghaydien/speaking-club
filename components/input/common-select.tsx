import React, { ReactNode } from "react";
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  CircularProgress,
} from "@mui/material";
import CommonInput from "./common-input";
import { ArrowDropDown } from "@mui/icons-material";

export type OptionProps = {
  value: string | number;
  label: string;
  image?: string;
  icon?: string;
};

type CommonSelectProps<T> = Omit<
  AutocompleteProps<OptionProps, false, false, false>,
  "renderInput"
> & {
  renderInput?: (params: AutocompleteRenderInputParams) => ReactNode;
  label?: React.ReactNode;
  error?: boolean;
  helperText?: React.ReactNode;
  onScrollTop?: () => void;
};

function CommonSelect<T>({
  label,
  error,
  helperText,
  sx,
  size = "small",
  loading,
  onScrollTop,
  renderInput,
  popupIcon = <ArrowDropDown />,
  ...props
}: CommonSelectProps<T>) {
  const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    const listboxNode = event.currentTarget;
    if (
      listboxNode.scrollTop + listboxNode.clientHeight >=
      listboxNode.scrollHeight
    ) {
      onScrollTop && onScrollTop();
    }
  };
  return (
    <Autocomplete
      {...props}
      fullWidth
      loading={loading}
      autoHighlight
      size={size}
      sx={{
        width: "100% ",
        ...sx,
      }}
      slotProps={{
        paper: {
          sx: {
            paddingX: (theme) => theme.spacing(1),
          },
        },
        listbox: {
          onScroll: handleScroll,
          sx: {
            "& li": {
              borderRadius: (theme) => theme.spacing(1),
              marginBottom: (theme) => theme.spacing(0.5),
              "&:last-child": {
                marginBottom: "unset",
              },
            },
          },
        },
      }}
      popupIcon={loading ? <CircularProgress size={20} /> : popupIcon}
      renderInput={
        renderInput
          ? renderInput
          : (params: AutocompleteRenderInputParams) => (
              <CommonInput
                {...params}
                label={label}
                error={error}
                helperText={helperText}
              />
            )
      }
    />
  );
}

export default CommonSelect;

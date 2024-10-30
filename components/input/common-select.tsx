import React from "react";
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from "@mui/material";
import CommonInput from "./common-input";

type CommonSelectProps<T> = Omit<
  AutocompleteProps<T, false, false, false>,
  "renderInput"
> &
  Partial<{
    label: React.ReactNode;
    error: boolean;
    helperText: React.ReactNode;
  }> & {
    size?: "small" | "medium";
  };

function CommonSelect<T>({
  label,
  error,
  helperText,
  sx,
  size = "small",
  ...props
}: CommonSelectProps<T>) {
  return (
    <Autocomplete
      {...props}
      fullWidth
      autoHighlight
      size={size}
      sx={{
        width: "100% ",
        ...sx,
      }}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <CommonInput
          {...params}
          label={label}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}

export default CommonSelect;

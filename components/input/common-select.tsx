import React, { ReactNode } from "react";
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  ChipTypeMap,
  CircularProgress,
} from "@mui/material";
import CommonInput from "./common-input";
import { ArrowDropDown } from "@mui/icons-material";

export interface CustomAutocompleteProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]
> extends Omit<
    AutocompleteProps<
      Value,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    "renderInput"
  > {
  renderInput?: (params: AutocompleteRenderInputParams) => ReactNode;
  label?: React.ReactNode;
  error?: boolean;
  helperText?: React.ReactNode;
  onScrollTop?: () => void;
}

function CommonSelect<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]
>({
  multiple,
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
}: CustomAutocompleteProps<
  Value,
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>) {
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
      multiple={multiple}
      fullWidth
      loading={loading}
      autoHighlight
      size={size}
      slotProps={{
        listbox: {
          onScroll: handleScroll,
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

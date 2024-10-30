import {
  Box,
  FormHelperText,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
} from "@mui/material";
import React, { forwardRef } from "react";
type CommonInputProps = TextFieldProps & {
  style?: SxProps<Theme>;
};

const CommonInput = forwardRef<HTMLDivElement, CommonInputProps>(
  (
    {
      error,
      helperText,
      size = "small",
      variant = "outlined",
      style,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        sx={{
          position: "relative",
          width: "100%",
          ...style,
        }}
      >
        <TextField
          error={error}
          size={size}
          fullWidth
          variant={variant}
          {...props}
        />
        {error && helperText && (
          <FormHelperText
            className={"error-message"}
            sx={{
              margin: 0,
              position: "absolute",
              top: "100%",
              left: 0,
              color: (theme) => theme.palette.error.main,
            }}
          >
            {helperText}
          </FormHelperText>
        )}
      </Box>
    );
  }
);

export default CommonInput;

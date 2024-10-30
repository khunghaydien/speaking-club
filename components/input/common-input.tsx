import { Box, FormHelperText, TextField, TextFieldProps } from "@mui/material";
import React, { forwardRef } from "react";
const CommonInput = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    { error, helperText, size = "small", variant = "outlined", ...props },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        sx={{
          position: "relative",
          width: "100%",
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

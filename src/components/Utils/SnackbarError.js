import React, { useState } from "react";
import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SnackbarError = ({ isError, setIsError, message, handleClose }) => {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <div>
      <Snackbar
        open={isError}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
          action={action}
        >
          {message != null ? message : "Message"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarError;

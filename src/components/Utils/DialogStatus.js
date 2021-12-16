import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Grid,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { resetUserCreateBooking } from "../../state/actions/booking";
import { resetRoom } from "../../state/actions/room";

const DialogStatus = ({ isOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(resetUserCreateBooking());
    dispatch(resetRoom());
    history.replace("/dashboard");
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid
          sx={{ p: 4 }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 100, color: "#4caf50" }} />
          <Typography sx={{ fontSize: 24, fontWeight: "bold", mt: 4 }}>
            Booking Success
          </Typography>
          <Button sx={{ mt: 2 }} autoFocus onClick={handleClose}>
            OK
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
};

export default DialogStatus;

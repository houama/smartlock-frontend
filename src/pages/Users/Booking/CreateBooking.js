import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
  Paper,
  Backdrop,
  Chip,
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Autocomplete,
  listSubheaderClasses,
  List,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import UserList from "./UserList";
import AppbarUser from "../../../components/AppbarUser/AppbarUser";
import SnackbarError from "../../../components/Utils/SnackbarError";
import DialogStatus from "../../../components/Utils/DialogStatus";

import { useDispatch, useSelector } from "react-redux";

import { searchUser, userCreateBooking } from "../../../state/actions/booking";

const CreateBooking = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const participant = useSelector((state) => state.userSearchUser);
  const currentUser = useSelector((state) => state.auth.auth);
  const bookingStatus = useSelector((state) => state.userBooking);

  const idRoom = location.state?.idRoom;
  const nameRoom = location.state?.nameRoom;
  const capacityRoom = location.state?.capacityRoom;
  const date = location.state?.date.toISOString().slice(0, 10);
  const time = location.state?.time;

  const [listUser, setListUser] = useState([]);
  const [listUID, setListUID] = useState([]);
  const [listUserBuffer, setListUserBuffer] = useState([]);
  const [nimInput, setNimInput] = useState("");
  const [userNim, setUserNim] = useState("");

  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBooking, setIsLoadingBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(bookingStatus);
    if (bookingStatus != null) {
      if (bookingStatus.err != null && bookingStatus.err != "") {
        setIsError((prev) => !prev);
        setErrMessage(bookingStatus.err);
      } else {
        setIsLoadingBooking(bookingStatus.isLoading);
        console.log(bookingStatus.data);
        if (bookingStatus.data?.length != 0) {
          setIsSuccess((prev) => !prev);
        }
      }
    }

    if (currentUser != null) {
      setUserNim(currentUser.nim);
    }

    if (participant != null) {
      setIsLoading(participant.isLoading);
      setListUserBuffer(
        participant.data.filter(
          (s) => s.nim != currentUser?.nim && !checkNIM(s.nim)
        )
      );
    }
  }, [participant, currentUser, bookingStatus]);

  const search = (e) => {
    if (nimInput != "") {
      setListUserBuffer([]);
      dispatch(searchUser(nimInput));
    }
  };

  const checkNIM = (nim) => {
    var isInside = false;

    listUser.map((s) => {
      if (s.nim === nim) {
        isInside = true;
      }
    });
    return isInside;
  };

  const handleNim = (e) => {
    setNimInput(e.target.value);
  };

  const addUser = (user) => {
    if (!listUser.includes(user)) {
      setListUser([...listUser, user]);
      setListUserBuffer((prev) => prev.filter((s) => s.nim != user.nim));
      setListUID([...listUID, user.uid]);
    }
  };

  const handleDelete = (user) => {
    setListUser((prev) => prev.filter((s) => s != user));
    setListUserBuffer([...listUserBuffer, user]);
    setListUID((prev) => prev.filter((s) => s != user.uid));
  };

  const handleCreateBooking = () => {
    if (
      idRoom != null &&
      date != null &&
      time != null &&
      userNim != "" &&
      listUID?.length
    ) {
      const startDate = new Date(
        date + " " + time.start + " UTC"
      ).toISOString();
      const endDate = new Date(date + " " + time.end + " UTC").toISOString();

      dispatch(userCreateBooking(userNim, idRoom, startDate, endDate, listUID));
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsError(false);
  };

  return (
    <div>
      <DialogStatus isOpen={isSuccess} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoadingBooking}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SnackbarError
        isError={isError}
        setIsError={setIsError}
        message={errMessage}
        handleClose={handleClose}
      />
      <AppbarUser />
      <Container>
        <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
          <Paper sx={{ p: 4, my: 2, backgroundColor: "#00A8E8" }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                {nameRoom != null ? nameRoom.toUpperCase() : "ROOM NAME"}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {capacityRoom != null
                  ? capacityRoom + " Person"
                  : "Capacity" + " Person"}
              </Typography>
            </Grid>
          </Paper>

          <Typography sx={{ fontWeight: "bold", fontSize: 20, mt: 4 }}>
            Add Participant
          </Typography>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            id="outlined-basic"
            label="NIM"
            variant="outlined"
            onChange={handleNim}
            type="text"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isLoading && <CircularProgress />}
                  <IconButton
                    onClick={search}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography sx={{ mb: 2 }}>List Participant</Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {listUser.map((s) => (
                  <Chip
                    key={s.nim + "chip"}
                    label={s.name + " " + s.nim}
                    onDelete={(e) => handleDelete(s)}
                  />
                ))}
              </Grid>

              <UserList user={listUserBuffer} addUser={addUser} />
            </Paper>
          </Grid>

          <Button
            sx={{ mt: 4 }}
            onClick={handleCreateBooking}
            fullWidth
            variant="contained"
            size="large"
          >
            Create Booking
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default CreateBooking;

import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
  Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import id from "date-fns/locale/id";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import TimeSelect from "./TimeSelect";
import RoomItem from "./RoomItem";

import AppbarUser from "../../../components/AppbarUser/AppbarUser";

import { checkRoom } from "../../../state/actions/booking";

const Booking = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const room = useSelector((state) => state.userRooms);

  const [date, setDate] = useState(null);
  const [time, setTime] = useState({ start: "", end: "" });

  const [roomList, setRoomList] = useState([]);
  const [endTimeList, setEndTimeList] = useState([]);
  const [roomID, setRoomID] = useState("");

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(room)
    if (room != null) {
      setRoomList(room.rooms);
      setIsLoading(room.isLoading)
    }
  }, [room]);

  const timeOption = [];

  for (var hour = 8; hour < 18; hour++) {
    timeOption.push(
      hour < 10 ? "0" + hour.toString() + ":00" : hour.toString() + ":00"
    );
  }

  const handleTimeChange = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });

    // Handle Time selection
    if (e.target.name == "start") {
      setEndTimeList(
        timeOption.filter((s) => {
          var list = parseInt(s.substring(0, s.indexOf(":")));
          var current = parseInt(
            e.target.value.substring(0, e.target.value.indexOf(":"))
          );
          return !(list < current || list == current) && list <= current + 2;
        })
      );
    }
  };

  const check = (e) => {
    if (time.start != null && time.end != null && date != null) {
      dispatch(checkRoom(date.toISOString().slice(0, 10), time));
    }
  };

  return (
    <div>
      <AppbarUser />
      <Container>
        <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            Select Booking Date
          </Typography>

          <Grid
            sx={{ mt: 4, mb: 4 }}
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={id}
                  >
                    <DatePicker
                      disablePast
                      label="Booking date"
                      views={["day", "month", "year"]}
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item sx={{mt: 2}}>
                  <TimeSelect
                    handleChange={handleTimeChange}
                    time={timeOption}
                    label="start"
                  />
                </Grid>

                <Grid item sx={{mt: 2}}>
                  <TimeSelect
                    handleChange={handleTimeChange}
                    time={endTimeList}
                    label="end"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item sx={{ mt: 4 }}>
              <Button onClick={check} variant="contained">
                Check Room Availibity
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {isLoading && <CircularProgress />}
        </Grid>

        <div>
          {roomList.map((data) => {
            return (
              <RoomItem
                date={date}
                time={time}
                id={data.id}
                name={data.name}
                capacity={data.capacity}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Booking;
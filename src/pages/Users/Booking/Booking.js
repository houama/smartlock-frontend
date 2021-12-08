import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";

import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import AppbarUser from "../../../components/AppbarUser/AppbarUser";

const Booking = () => {
  const [value, setValue] = useState(new Date());
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");

  const [timeList, setTimeList] = useState([]);

  const timeOption = [];

  for (var hour = 8; hour < 18; hour++) {
    timeOption.push(hour.toString() + ":00");
  }

  return (
    <div>
      <AppbarUser />
      <Container>
        <Grid
          sx={{ mt: 4, mb: 4 }}
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Select Booking Date
            </Typography>

            <Grid
              sx={{ mt: 4, mb: 4 }}
              container
              direction="row"
              alignItems="center"
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="Booking date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Typography sx={{ mx: 2, fontWeight: "bold", fontSize: 16 }}>
                From
              </Typography>
              <Select label="Start" autoWidth value={startTime}>
                {timeOption.map((time) => (
                  <MenuItem key={"start" + time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>

              <Typography sx={{ mx: 2, fontWeight: "bold", fontSize: 16 }}>
                To
              </Typography>

              <Select label="End" autoWidth value={endTime}>
                {timeOption.map((time) => (
                  <MenuItem key={"end" + time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Booking;

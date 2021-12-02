import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select
} from "@mui/material";

import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import AppbarUser from "../../../components/AppbarUser/AppbarUser";

const Booking = () => {
  const [value, setValue] = useState(new Date());
  const timeOption = []

  for(var hour=8; hour<17; hour++){
    timeOption.push(hour.toString()+":00 UTC") 
    }

    console.log(timeOption)

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

            <Grid sx={{ mt: 4, mb: 4 }} container direction="row">
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
              <Typography></Typography>

              {/* <TextField
                name="start_time"
                variant="outlined"
                // error={error}
                required
                fullWidth
                value={recordData[`${item.name}`]}
                label={item.label}
                // autoFocus={autofocus}
                type={item.type}
                select
                disabled={item.editable === false}
              >
                {item.type === "option"
                  ? item.option.map((option) => {
                      return <MenuItem value={option}>{option}</MenuItem>;
                    })
                  : null}
              </TextField> */}
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Booking;

import React from "react";
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
  Button,
} from "@mui/material";

const TimeSelect = ({ handleChange, time, label }) => {
  return (
    <div>
      <Grid direction="row" alignItems="center" justifyContent="flex-start" container >
        {/* <Typography sx={{ mx: 2, fontWeight: "bold", fontSize: 16 }}>
          {label === "start" ? "From" : "To"}
        </Typography> */}
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id={label + "selector"}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </InputLabel>
          <Select
            labelId={label + "selector"}
            label={label}
            name={label}
            onChange={handleChange}
            autoWidth
            value={time.start}
          >
            {time.map((s) => (
              <MenuItem key={label + s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </div>
  );
};

export default TimeSelect;
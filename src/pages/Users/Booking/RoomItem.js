import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import { useHistory } from 'react-router-dom'

const RoomItem = ({id, name, capacity, date, time }) => {

  const history = useHistory()
  const handleRoomClick = (e) => {
    history.push({
      pathname: '/createbooking',
      state : {
        idRoom : id,
        nameRoom : name,
        capacityRoom : capacity,
        date: date,
        time: time
      }
    })
  }

  return (
    <div>
      <Paper id={id != null && id} sx={{ p: 4, my: 2, backgroundColor: "#00A8E8", cursor: "pointer" }} onClick={handleRoomClick}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
            <Typography sx={{fontWeight: "bold", fontSize: 20}}>{name != null ? name.toUpperCase() : "ROOM NAME"}</Typography>
            <Typography sx={{fontSize: 12}}>{capacity != null ? capacity + " Person" : "Capacity" + " Person"}</Typography>
        </Grid>
        
      </Paper>
    </div>
  );
};

export default RoomItem;
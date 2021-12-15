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
  Autocomplete,
  listSubheaderClasses,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import AddIcon from '@mui/icons-material/Add';

const UserList = ({ user, addUser }) => {
  return (
    <div>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {user.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value.nim}
              dense={true}
              secondaryAction={
                <IconButton id={value.nim} onClick={e => addUser(value)} edge="end">
                  <AddIcon />
                </IconButton>
              }
            >
              <ListItemText
                sx={{ color: "black" }}
                primary={value.name + " " + value.nim}
                id={labelId}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default UserList;
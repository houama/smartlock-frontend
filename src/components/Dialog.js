import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
  MenuItem,
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Cancel } from "@mui/icons-material";
import { updateRoom, createRoom, deleteRoom } from "../state/actions/room";
import {
  updateNode,
  createNode,
  deleteNode,
  getAvailableNodes,
} from "../state/actions/node";
import { updateStatusBooking } from "../state/actions/booking";

// import TableSnackBar from './TableSnackBar'

const TableDialog = ({
  menu,
  title,
  isOpen,
  data,
  handleClose,
  isEdit,
  isDelete,
  field,
  record,
  roomData,
}) => {
  const [open, setOpen] = useState(false);
  const [recordData, setRecordData] = useState(record);

  const NodesData = useSelector((state) => state.nodes.availableNodes);

  // const data = useSelector((state) => state.records)
  // const record = currentId ? data.records.find((rec) => rec._id === currentId) : null

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      if (data) {
        setRecordData(data);
        if (menu === "room") {
          dispatch(getAvailableNodes(data.NodeId));
        }
      }
    } else {
      dispatch(getAvailableNodes());
    }

    if (isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data, isOpen]);

  const handleSubmit = () => {
    if (isDelete) {
      if (menu === "room") {
        dispatch(deleteRoom(data[0]));
      } else if (menu === "node") {
        dispatch(deleteNode(data[0]));
      }
    } else if (!isEdit) {
      if (menu === "room") {
        dispatch(createRoom(recordData));
      } else if (menu === "node") {
        dispatch(createNode(recordData));
      }
    } else {
      if (menu === "room") {
        dispatch(updateRoom(recordData[`id`], recordData));
      } else if (menu === "node") {
        dispatch(updateNode(recordData[`id`], recordData));
      } else if (menu === "booking") {
        dispatch(
          updateStatusBooking(recordData[`id`], {
            status: recordData[`status`],
          })
        );
      }
    }

    handleClose();
  };

  return (
    <div>
      {/* <TableSnackBar isEdit={isEdit} isSuccess={data.isSuccess}/> */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle id="alert-dialog-title">
          <Box display="flex" alignItems="center" marginTop="10px">
            <Box flexGrow={1}>
              <Typography variant="h5" fontWeight="bold">
                {/* {isEdit ? 'Edit Record' : 'Delete Record'} */}
                {title}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={handleClose}>
                <Cancel color="secondary" fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          {isDelete ? (
            <DialogContentText id="alert-dialog-description">
              Are you sure want to delete {data[1]} ?
            </DialogContentText>
          ) : (
            <Grid container spacing={3} marginTop={1}>
              {open &&
                field.map((item) => {
                  if (isEdit) {
                    if (item.name === "participant_list") {
                      return (
                        <List
                          sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                          }}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            marginLeft="25px"
                            marginTop="10px"
                          >
                            <Typography
                              sx={{ display: "flex", alignItems: "flex-start" }}
                              variant="h7"
                              color="text.primary"
                              fontWeight="bold"
                            >
                              List of Participants
                            </Typography>
                          </Box>

                          {recordData[`participant_list`].map((list, index) => {
                            return (
                              <>
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar
                                    // alt="Remy Sharp"
                                    // src="/static/images/avatar/1.jpg"
                                    />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={
                                      <Typography
                                        color="text.primary"
                                        fontSize={14}
                                      >
                                        Participant {index + 1}
                                      </Typography>
                                    }
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          sx={{ display: "inline" }}
                                          component="span"
                                          variant="body2"
                                          color="text.primary"
                                        >
                                          {list}
                                        </Typography>
                                        {index === 0
                                          ? " — " +
                                            recordData[`user_booking_nim`]
                                          : null}
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                              </>
                            );
                          })}
                        </List>
                      );
                    } else {
                      return (
                        <Grid item xs={12}>
                          <TextField
                            name={item.name}
                            onChange={(e) =>
                              setRecordData({
                                ...recordData,
                                [`${item.name}`]: e.target.value,
                              })
                            }
                            variant="outlined"
                            // error={error}
                            required
                            fullWidth
                            value={
                              menu === "booking" && item.name === "room_name"
                                ? roomData[`name`]
                                : recordData[`${item.name}`]
                            }
                            label={item.label}
                            // autoFocus={autofocus}
                            type={item.type}
                            select={item.type === "option"}
                            disabled={item.editable === false}
                          >
                            {item.type === "option"
                              ? item.name === "NodeId"
                                ? NodesData &&
                                  NodesData.map((option) => {
                                    return (
                                      <MenuItem value={option.id}>
                                        {option.name}
                                      </MenuItem>
                                    );
                                  })
                                : item.option &&
                                  item.option.map((option) => {
                                    return (
                                      <MenuItem value={option}>
                                        {option}
                                      </MenuItem>
                                    );
                                  })
                              : null}
                          </TextField>
                        </Grid>
                      );
                    }
                  } else {
                    if (item.creatable) {
                      return (
                        <Grid item xs={12}>
                          <TextField
                            name={item.name}
                            onChange={(e) =>
                              setRecordData({
                                ...recordData,
                                [`${item.name}`]: e.target.value,
                              })
                            }
                            variant="outlined"
                            // error={error}
                            required
                            fullWidth
                            label={item.label}
                            // autoFocus={autofocus}
                            type={item.type}
                            select={item.type === "option"}
                          >
                            {item.type === "option"
                              ? item.name === "NodeId"
                                ? NodesData &&
                                  NodesData.map((option) => {
                                    return (
                                      <MenuItem value={option.id}>
                                        {option.name}
                                      </MenuItem>
                                    );
                                  })
                                : item.option &&
                                  item.option.map((option) => {
                                    return (
                                      <MenuItem value={option}>
                                        {option}
                                      </MenuItem>
                                    );
                                  })
                              : null}
                          </TextField>
                        </Grid>
                      );
                    }
                  }
                })}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color={isEdit ? "success" : "primary"}
          >
            {isDelete ? "Delete" : isEdit ? "Save" : "Create"}
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            color={isEdit ? "error" : "secondary"}
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TableDialog;

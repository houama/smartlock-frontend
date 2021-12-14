import React, { useState, useEffect } from "react";
import Appbar from "../../../components/Appbar";
import Sidebar from "../../../components/Sidebar";
import Table from "../../../components/DataTable";
import { Box, IconButton, Button } from "@mui/material";
// import { column } from "./column";
import { Edit, Delete, AddCircle, EditOutlined } from "@mui/icons-material";
import { getBooking } from "../../../state/actions/booking";
import { useDispatch, useSelector } from "react-redux";
import TableDialog from "../../../components/Dialog";
import InputData from "./InputData";
import { getSpecificRoom } from "../../../state/actions/room";
import moment from "moment";

const Bookings = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteData, setDeleteData] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [title, setTitle] = useState();
  const [isDelete, setIsDelete] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooking());
  }, [dispatch]);

  const data = useSelector((state) => state.bookings);
  const roomData = useSelector((state) => state.rooms);

  let rows = [],
    columns = [];

  rows = data.bookings.map((item) => {
    const container = {};
    container["id"] = item._id;
    container["start_date"] = moment(item.start_date).format("ddd, DD MMM YY");
    container["end_date"] = moment(item.end_date).format("ddd, DD MMM YY");
    container["duration"] = item.duration;
    container["room_id"] = item.room_id;
    container["status"] = item.status;
    container["user_booking_nim"] = item.user_booking_nim;
    container["participant"] = item.participant.length;
    container["participant_list"] = item.participant;
    container["createdAt"] = moment(item.createdAt).format("ddd, DD MMM YY");
    container["updatedAt"] = moment(item.updatedAt).format("ddd, DD MMM YY");
    container["action"] = "";
    return container;
  });

  columns = [
    { field: "id", headerName: "Booking ID", width: 130 },
    { field: "start_date", headerName: "Start date", width: 130 },
    { field: "end_date", headerName: "End date", width: 130 },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "room_id", headerName: "Room ID", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "user_booking_nim", headerName: "Borrower", width: 130 },
    { field: "participant", headerName: "Participant", width: 130 },
    {
      field: "createdAt",
      headerName: "Created date",
      width: 200,
      type: "dateTime",
    },
    {
      field: "updatedAt",
      headerName: "Updated date",
      width: 200,
      type: "dateTime",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={(e) => {
              handleEdit(params);
            }}
          >
            <Edit />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={(e) => {
              handleDelete(params);
            }}
          >
            <Delete />
          </IconButton>
        </>
      ),
    },
  ];

  const handleEdit = (params) => {
    dispatch(getSpecificRoom(params.row.room_id));
    setEditData(params.row);
    setIsDelete(false);
    setIsEdit(true);
    setTitle("Edit Booking");
    setOpen(true);
  };

  const handleDelete = (params) => {
    setDeleteData([params.row.id, params.row.room_id]);
    setIsDelete(true);
    setTitle("Delete Booking");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const rows = [
  //   {
  //     id: "LIB001",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB002",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB003",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB004",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB005",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB006",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB007",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB008",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB009",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB0010",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  //   {
  //     id: "LIB0011",
  //     room_name: "Tongkonan",
  //     borrower: "Sony",
  //     booking_date: "7/15/2021 2:23 PM",
  //     start_time: "1:30 PM",
  //     end_time: "2:00 PM",
  //     num_participant: 5,
  //     booking_status: "Approved",
  //   },
  // ];

  return (
    <>
      <TableDialog
        menu="booking"
        isEdit={isEdit}
        isDelete={isDelete}
        isOpen={open}
        title={title}
        roomData={roomData && roomData.rooms}
        data={isDelete ? deleteData : editData}
        field={InputData}
        record={
          isEdit && {
            id: "",
            room_id: "",
            room_name: "",
            start_date: "",
            end_date: "",
            participant: [],
            status: "",
          }
        }
        handleClose={handleClose}
      />
      <div>
        <Appbar />
        <Box sx={{ display: "flex" }}>
          <Sidebar selectedDrawer="Bookings" />
          <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 15 }}>
            <Table columns={columns} rows={rows} />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Bookings;

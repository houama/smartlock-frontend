import React, { useState, useEffect } from "react";
import Appbar from "../../../components/Appbar";
import Sidebar from "../../../components/Sidebar";
import Table from "../../../components/DataTable";
import { Box, IconButton, Button } from "@mui/material";
import { Edit, Delete, AddCircle, EditOutlined } from "@mui/icons-material";
import TableDialog from "../../../components/Dialog";
import InputData from "./InputData";
import { getRoom } from "../../../state/actions/room";
import { useDispatch, useSelector } from "react-redux";

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteData, setDeleteData] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [title, setTitle] = useState();
  const [isDelete, setIsDelete] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoom());
  }, [dispatch]);

  const data = useSelector((state) => state.rooms);

  let rows = [],
    columns = [];

  rows = data.rooms.map((item) => {
    const container = {};
    container["id"] = item.id;
    container["name"] = item.name;
    container["capacity"] = item.capacity;
    container["status"] = item.status;
    container["createdAt"] = item.createdAt;
    container["updatedAt"] = item.updatedAt;
    container["NodeId"] = item.NodeId;
    container["action"] = "";
    return container;
  });

  //   const rows = [
  //     { id: 'LIB001', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB002', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB003', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB004', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB005', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB006', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB007', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB008', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB009', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB0010', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  //     { id: 'LIB0011', room_name: 'Tongkonan', capacity: 'Sony', status: 'Reserved', node_id: 'NOD001', created_date: '7/15/2021 2:23 PM', updated_date: 5},
  // ];

  columns = [
    { field: "id", headerName: "Room ID", width: 130 },
    { field: "name", headerName: "Room name", width: 130 },
    { field: "capacity", headerName: "Capacity", width: 130, type: "number" },
    { field: "status", headerName: "Status", width: 130 },
    { field: "NodeId", headerName: "Node ID", width: 130 },
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
    setEditData(params.row);
    setIsDelete(false);
    setIsEdit(true);
    setTitle("Edit Room");
    setOpen(true);
  };

  const handleCreate = () => {
    setIsEdit(false);
    setIsDelete(false);
    setTitle("Create Room");
    setOpen(true);
  };

  const handleDelete = (params) => {
    setDeleteData([params.row.id, params.row.room_name]);
    setIsDelete(true);
    setTitle("Delete Room");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TableDialog
        menu="room"
        isEdit={isEdit}
        isDelete={isDelete}
        isOpen={open}
        title={title}
        data={isDelete ? deleteData : editData}
        field={InputData}
        record={
          isEdit
            ? { id: "", name: "", NodeId: "", status: "" }
            : { name: "", NodeId: "", capacity: "" }
        }
        handleClose={handleClose}
      />
      <Appbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar selectedDrawer="Rooms" />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 15 }}>
          <Box marginBottom={4} textAlign="right">
            <Button onClick={handleCreate} variant="contained" color="primary">
              <AddCircle fontSize="small" />
              Create
            </Button>
          </Box>
          <Table columns={columns} rows={rows} />
        </Box>
      </Box>
    </div>
  );
};

export default Rooms;

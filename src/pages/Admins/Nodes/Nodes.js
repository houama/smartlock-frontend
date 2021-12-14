import React, { useState, useEffect } from "react";
import Appbar from "../../../components/Appbar";
import Sidebar from "../../../components/Sidebar";
import Table from "../../../components/DataTable";
import { Box, IconButton, Button } from "@mui/material";
import { Edit, Delete, AddCircle } from "@mui/icons-material";
import TableDialog from "../../../components/Dialog";
import InputData from "./InputData";
import { getNodes } from "../../../state/actions/node";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Nodes = () => {
  const [open, setOpen] = useState(false);
  const [EditData, setEditData] = useState();
  const [deleteData, setDeleteData] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [title, setTitle] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNodes());
  }, [dispatch]);

  const data = useSelector((state) => state.nodes);

  console.log("nodes:", data);

  let rows = [],
    columns = [];

  rows = data.nodes.map((item) => {
    const container = {};
    container["id"] = item.id;
    container["name"] = item.name;
    container["version"] = item.version;
    container["status"] = item.status;
    container["last_check"] = item.last_check;
    if (item.Room !== null) {
      container["RoomId"] = item.Room.id;
      container["RoomName"] = item.Room.name;
    }

    container["createdAt"] = moment(item.createdAt).format("ddd, DD MMM YY");
    container["updatedAt"] = moment(item.updatedAt).format("ddd, DD MMM YY");
    container["action"] = "";
    return container;
  });

  // const rows = [
  //   { id: 'LIB001', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB002', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Not activated'},
  //   { id: 'LIB003', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB004', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB005', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Not activated'},
  //   { id: 'LIB006', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB007', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB008', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB009', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB0010', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  //   { id: 'LIB0011', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
  // ];

  columns = [
    { field: "id", headerName: "Node ID", width: 130 },
    { field: "name", headerName: "Node name", width: 130 },
    { field: "version", headerName: "Node version", width: 130 },
    { field: "RoomId", headerName: "Room ID", width: 130 },
    { field: "RoomName", headerName: "Room name", width: 130 },
    {
      field: "createdAt",
      headerName: "Created date",
      width: 200,
      type: "dateTime",
    },
    { field: "status", headerName: "Status", width: 130 },
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
    setTitle("Edit Node");
    setOpen(true);
  };

  const handleCreate = () => {
    setIsDelete(false);
    setIsEdit(false);
    setTitle("Create Node");
    setOpen(true);
  };

  const handleDelete = (params) => {
    setDeleteData([params.row.id, params.row.name]);
    setIsDelete(true);
    setTitle("Delete Node");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TableDialog
        menu="node"
        isEdit={isEdit}
        isDelete={isDelete}
        isOpen={open}
        title={title}
        data={isDelete ? deleteData : EditData}
        field={InputData}
        record={
          isEdit
            ? { id: "", name: "", version: "", room_name: "", status: "" }
            : { name: "", version: "" }
        }
        handleClose={handleClose}
      />

      <Appbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar selectedDrawer="Nodes" />
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

export default Nodes;

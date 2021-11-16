import React, { useState } from 'react';
import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/DataTable';
import { Box, IconButton, Button } from '@mui/material';
import { Edit, Delete, AddCircle } from '@mui/icons-material';
import TableDialog from '../../components/Dialog';
import InputData from './InputData';

const Nodes = () => {

  const [open, setOpen] = useState(false)
  const [data, setData] = useState()
  const [isEdit, setIsEdit] = useState(true)
  const [title, setTitle] = useState()

  
  const rows = [
    { id: 'LIB001', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB002', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Not activated'},
    { id: 'LIB003', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB004', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB005', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Not activated'},
    { id: 'LIB006', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB007', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB008', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB009', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB0010', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
    { id: 'LIB0011', node_name: 'Tongkonan', node_version: 'Sony', room_id: 'Reserved', room_name: 'NOD001', created_date: '7/15/2021 2:23 PM', status: 'Activated'},
];

  const column = [
    { field: 'id', headerName: 'Node ID', width: 130 },
    { field: 'node_name', headerName: 'Node name', width: 130 },
    { field: 'node_version', headerName: 'Node version', width: 130},
    { field: 'room_id', headerName: 'Room ID', width: 130},
    { field: 'room_name', headerName: 'Room name', width: 130},
    { field: 'created_date', headerName: 'Created date', width: 200, type:'dateTime'},
    { field: 'status', headerName: 'Status', width: 130},
    { field: 'action', headerName: 'Action', width:150, sortable:false, disableClickEventBubbling: true,
        renderCell: (params) => (
            <>
                <IconButton color="primary" 
                    onClick={(e) => {
                        handleEdit(params)}} >
                    <Edit />
                </IconButton >  
                <IconButton color="secondary"  >
                    <Delete />
                </IconButton>
            </>
      )}
  ];

  const handleEdit = (params) => {
    setData(params.row)
    setIsEdit(true)
    setTitle("Edit Node")
    setOpen(true)
  }

  const handleCreate = () => {
    setIsEdit(false)
    setTitle("Create Node")
    setOpen(true)
  }

  const handleClose =  () => {
    setOpen(false)
  }

  return(
    <div>
      <TableDialog
        menu = "node"
        isEdit = {isEdit}
        isOpen = {open}
        title = {title}
        data = {data}
        field = {InputData}
        record = {isEdit ? { id: '', node_name: '', node_version: '', room_name: '', status: ''} : { node_name: '', node_version: ''}}
        handleClose = {handleClose}
      />

      <Appbar/>
      <Box sx={{ display: 'flex' }}>
        <Sidebar
            selectedDrawer = "Nodes"
        />
            <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 15 }} >
                <Box marginBottom={4} textAlign="right">
                  <Button onClick={handleCreate} variant="contained" color="primary">
                      <AddCircle fontSize="small"/> 
                      Create
                  </Button>
                </Box>
                <Table
                    columns={column}
                    rows={rows}
                />
            </Box>
      </Box>
    </div>
  )
}

export default Nodes
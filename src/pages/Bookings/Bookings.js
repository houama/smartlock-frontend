import * as React from 'react';
import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/DataTable';
import { Box } from '@mui/material';
import { column } from './column';


const Bookings = () => {

    const rows = [
        { id: 'LIB001', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB002', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB003', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB004', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB005', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB006', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB007', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB008', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB009', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB0010', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
        { id: 'LIB0011', room_name: 'Tongkonan', borrower: 'Sony', booking_date: '7/15/2021 2:23 PM', start_time: '1:30 PM', end_time: '2:00 PM', num_participant: 5, booking_status: 'Approved'},
    ];

  return(
    <div>
        
      <Appbar/>
      <Box sx={{ display: 'flex' }}>
        <Sidebar
            selectedDrawer = "Bookings"
        />
            <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 15 }} >
                <Table
                    columns={column}
                    rows={rows}
                />
            </Box>
        </Box>

    </div>
  )
}

export default Bookings
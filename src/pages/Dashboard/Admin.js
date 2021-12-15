import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";
import Chart from "../../components/chart";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../../state/actions/dashboard";
import { dataLoading, dataSuccess } from "../../state/actions/node";
import axios from "axios";
import Cookies from "js-cookie";
import { CountertopsOutlined } from "@mui/icons-material";

/*
Dashboard for Admin
*/
const Admin = () => {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState();

  const data = useSelector((state) => state.dashboards);

  // console.log(data);

  useEffect(() => {
    dispatch(getDashboardData());

    if (data.counts && data.weeks) {
      setChartData({
        labels: data.weeks,
        datasets: [
          {
            label: "Amount of bookings",
            data: data.counts,
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          },
        ],
      });
    }
  }, [dispatch]);

  console.log(chartData);

  return (
    <div>
      <Appbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar selectedDrawer="Dashboard" />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 15 }}>
          {chartData && <Chart chartData={chartData} />}
        </Box>
      </Box>
    </div>
  );
};

export default Admin;

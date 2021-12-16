import * as React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

import AppbarUser from "../../components/AppbarUser/AppbarUser";



import {
  Paper,
  Grid,
  Typography,
  Container,
  Divider,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { rules } from "./rules";

/*
Dashboard for User
*/
const Dashboard = () => {
  const [checked, setChecked] = useState(false);
  const history = useHistory()

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleClick = (e) => {
    history.push('/booking')
  }

  return (
    <div>
      <AppbarUser />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Grid
          container
          spacing={2}
          direction={{xs: "column", md: "row"}}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Paper sx={{ p: 4 }} elevation={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
              >
                <Grid item>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Important Rules
                  </Typography>
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <Typography>{rules}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Paper sx={{ p: 4 }} elevation={3}>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  label="I have read and agreed with the rules"
                />
              </Paper>
              {checked && (
                <Button sx={{ fontSize: 24, fontWeight: "bold", mt: 1 }} onClick={handleClick}>
                  Next
                  <NavigateNextIcon fontSize="large" />
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import {
  Container,
  Paper,
  Grid,
  Button,
  Typography,
  Grow,
  IconButton,
  ThemeProvider,
  Box,
  Link,
} from "@mui/material";
import useStyles from "./styles";
import Appbar from "../../components/Appbar";

import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../state/actions/auth";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [authData, setAuthData] = useState({ email: "", password: "" });

  //Redux
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp(authData, history));
    } else {
      dispatch(signIn(authData));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    setAuthData({ ...authData, [e.target.name]: e.target.value });
    setIsError(false);
  };

  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    setShowPassword(false);
  };

  useEffect(() => {
    // document.body.classList.add(classes.body)

    if (auth != null) {
      switch (auth.role) {
        case "user":
          history.push("/dashboard");
          break;

        case "admin":
          history.push("/admin");
          break;

        default:
      }
    }
  }, [auth]);

  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}

      <Appbar />

      <Grow in={true} timeout={1000}>
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title} variant="h4">
              {isSignUp ? "sign up" : "sign in"}
            </Typography>
            <form
              autoComplete="off"
              className={classes.form}
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2} marginTop={4}>
                {isSignUp && (
                  <>
                    <Input name="nim" label="NIM" handleChange={handleChange} />
                    <Input name="uid" label="UID" handleChange={handleChange} />
                    <Input
                      name="first_name"
                      label="First Name"
                      handleChange={handleChange}
                    />
                    <Input
                      name="last_name"
                      label="Last Name"
                      handleChange={handleChange}
                    />
                  </>
                )}

                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  autoFocus
                  error={isError}
                />

                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                  error={isError}
                />
              </Grid>

              {isError && (
                <Typography
                  className={classes.error}
                  align="center"
                  color="error"
                >
                  {errorMsg}
                </Typography>
              )}

              <Grid container marginTop={2}>
                {!isSignUp ? (
                  <Grid item flexGrow={1}>
                    <Link className={classes.linkText}>Forgot password?</Link>
                  </Grid>
                ) : null}

                <Grid item>
                  <Link onClick={switchMode} className={classes.linkText}>
                    {isSignUp
                      ? "Have an account? Sign In"
                      : "Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              <Grid container marginTop={20}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Grow>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Login;

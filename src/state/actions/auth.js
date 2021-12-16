import * as api from "../../api";
import Cookies from "js-cookie";
import decode from "jwt-decode";

export const signIn = (authData) => async (dispatch) => {
  api
    .signIn(authData)
    .then((res) => {
      const token = res.data.token;

      Cookies.set("token", token, {
        path: "/",
        secure: true,
        sameSite: "none",
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: decode(token) });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: "ERRORAUTH",
        payload: err.response.data,
      });
    });
};

export const signUp = (authData, history) => async (dispatch) => {
  api
    .signUp(authData)
    .then((res) => {
      history.push("/");
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: "ERRORAUTH",
        payload: err.response.data.errors,
      });
    });
};

export const logOut = () => async (dispatch) => {
  Cookies.remove("token");
  dispatch({ type: "LOGOUT" });
};

export const setLoggedUser = (token) => async (dispatch) => {
  dispatch({ type: "LOGIN_SUCCESS", payload: decode(token) });
};

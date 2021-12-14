import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  //TODO: change baseUrl
  baseURL: process.env.REACT_APP_BASE_URL,
});

API.interceptors.request.use((req) => {
  if (Cookies.get().token) {
    req.headers.Authorization = `Bearer ${Cookies.get().token}`;
  }

  return req;
});

export const signIn = async (authData) => {
  return API.post("/api/auth/login", authData);
};

// Bookings
export const getAllBookings = async () => API.get("/api/bookings");

export const getSpecificBooking = async (id) =>
  API.get(`/api/bookings/user/${id}`);

export const editBookingStatus = async (id, data) =>
  API.patch(`/api/bookings/${id}`, data);

export const deleteBooking = async (id) =>
  API.delete(`/api/bookings/${id}`).then(getAllBookings);

// Rooms
export const getAllRooms = async () => API.get("/api/rooms");

export const getSpecificRoom = async (id) => API.get(`/api/rooms/${id}`);

export const createRoom = async (data) =>
  API.post("/api/rooms/create", data).then(getAllRooms);

export const editRoom = async (roomID, data) =>
  API.put(`/api/rooms/${roomID}`, data).then(getAllRooms);

export const deleteRoom = async (roomID) =>
  API.delete(`/api/rooms/${roomID}`).then(getAllRooms);

// Nodes
export const getAllNodes = async () => API.get("/api/nodes");

export const createNode = async (data) =>
  API.post("/api/nodes/create", data).then(getAllNodes);

export const editNode = async (nodeID, data) =>
  API.put(`/api/nodes/${nodeID}/edit`, data).then(getAllNodes);

export const deleteNode = async (nodeID) =>
  API.delete(`/api/nodes/${nodeID}`).then(getAllNodes);

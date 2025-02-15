import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define API Base URL
const API_URL = "http://localhost:3000/api/clients";

// **Fetch Users (Async Thunk)**
export const fetchClients = createAsyncThunk("clients/fetchClients", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// **Add User (Async Thunk)**
export const addClient = createAsyncThunk("clients/addClient", async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
});

const clientSlice = createSlice({
  name: "clients",
  initialState: { data: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  }
});

export default clientSlice.reducer;

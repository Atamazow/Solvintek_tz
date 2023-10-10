import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(`https://layout.solvintech.ru/nuxt/api/` );
  return data;
});

const initialState = {
  users: [],
  status: "loading",
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getItems(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.status = "loading";
    },
    [fetchUsers.fulfilled](state, action) {
      state.users = action.payload;
      state.status = "success";
    },
    [fetchUsers.rejected](state) {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { getItems } = usersSlice.actions;

export default usersSlice.reducer;

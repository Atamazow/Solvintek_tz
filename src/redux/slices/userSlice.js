import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
};

export const userSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action) {
           state.users.push(action.payload)
         },
        closeItems(state,action) {
            state.users = []
        }
     },
});

export const { addItems } = userSlice.actions;

export default userSlice.reducer;

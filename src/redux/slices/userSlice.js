import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.user = action.payload;
        },
        reset(state) {
            state.user = null;
        }
    },
});

export const { addItem, reset } = userSlice.actions;

export default userSlice.reducer;

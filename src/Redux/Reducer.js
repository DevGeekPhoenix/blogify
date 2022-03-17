import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  userBlogs: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setuserBlogs: (state, action) => {
      state.userBlogs = action.payload;
    },
  },
});

export const { setUserData, setuserBlogs } = dataSlice.actions;

export default dataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    details: {},
  },
  reducers: {
    saveUser: (state, { payload }) => {
      // state = action.payload
      Object.assign(state, { isLoggedIn: true, details: payload });
    },
    clearUser: (state, action) => {
      Object.assign(state, { isLoggedIn: false, details: {} });
    },
  },
});
// Action creators are generated for each case reducer function
export const { saveUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

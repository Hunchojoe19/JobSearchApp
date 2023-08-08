import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    userDetails: userSlice,
  },
});

export default store;

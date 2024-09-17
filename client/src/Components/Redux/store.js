import { configureStore } from "@reduxjs/toolkit";
import {
  changePasswordReducer,
  loadCurrentAdminReducer,
  resetPasswordReducer,
  signInReducer,
} from "./Reducers/Reducers";

const store = configureStore({
  reducer: {
    signInReducer: signInReducer,
    loadCurrentAdminReducer: loadCurrentAdminReducer,
    resetPasswordReducer: resetPasswordReducer,
    changePasswordReducer: changePasswordReducer,
  },
});

export default store;

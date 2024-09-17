import { createReducer } from "@reduxjs/toolkit";

const signInReducer = createReducer(
  { loading: false, error: null, message: null },
  (builder) => {
    builder
      .addCase("SIGN_IN_REQUEST", (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase("SIGN_IN_SUCCESS", (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase("SIGN_IN_FAILURE", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("CLEAR_ERRORS", (state, action) => {
        state.error = null;
      });
  }
);
const loadCurrentAdminReducer = createReducer(
  { adminLoading: false, adminData: null, adminError: null },
  (builder) => {
    builder
      .addCase("LOAD_CURRENT_ADMIN_REQUEST", (state) => {
        state.adminLoading = true;
        state.adminData = null;
        state.adminError = null;
      })
      .addCase("LOAD_CURRENT_ADMIN_SUCCESS", (state, action) => {
        state.adminLoading = false;
        state.adminData = action.payload;
      })
      .addCase("LOAD_CURRENT_ADMIN_FAILURE", (state, action) => {
        state.adminLoading = false;
        state.adminError = action.payload;
      })
      .addCase("CLEAR_ADMIN_ERRORS", (state, action) => {
        state.adminError = null;
      });
  }
);
const resetPasswordReducer = createReducer(
  { loading: false, error: null, message: null },
  (builder) => {
    builder
      .addCase("RESET_PASSWORD_REQUEST", (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase("RESET_PASSWORD_SUCCESS", (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase("RESET_PASSWORD_FAILURE", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("CLEAR_ERRORS", (state, action) => {
        state.error = null;
      });
  }
);
const changePasswordReducer = createReducer(
  { loading: false, message: null, error: null },
  (builder) => {
    builder
      .addCase("CHANGE_PASSWORD_REQUEST", (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase("CHANGE_PASSWORD_SUCCESS", (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase("CHANGE_PASSWORD_FAILURE", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("CLEAR_ERRORS", (state, action) => {
        state.error = null;
      });
  }
);
export {
  signInReducer,
  loadCurrentAdminReducer,
  resetPasswordReducer,
  changePasswordReducer,
};

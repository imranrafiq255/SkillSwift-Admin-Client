import axios from "axios";

const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
const signInAction = (signData) => async (dispatch) => {
  try {
    dispatch({ type: "SIGN_IN_REQUEST" });
    const response = await axios.post("/api/v1/admin/sign-in", signData);
    dispatch({ type: "SIGN_IN_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({
      type: "SIGN_IN_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};
const loadCurrentAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_CURRENT_ADMIN_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-current-admin");
    dispatch({
      type: "LOAD_CURRENT_ADMIN_SUCCESS",
      payload: response.data.admin,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_CURRENT_ADMIN_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};
const resetPasswordAction = (resetData) => async (dispatch) => {
  try {
    dispatch({ type: "RESET_PASSWORD_REQUEST" });
    const response = await axios.post(
      "/api/v1/admin/send-reset-password-email",
      resetData
    );
    dispatch({
      type: "RESET_PASSWORD_SUCCESS",
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: "RESET_PASSWORD_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};
const changePasswordAction = (changeData, token) => async (dispatch) => {
  try {
    dispatch({ type: "CHANGE_PASSWORD_REQUEST" });

    const response = await axios.post(
      `/api/v1/admin/reset-password/${token}`,
      changeData
    );
    dispatch({
      type: "CHANGE_PASSWORD_SUCCESS",
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: "CHANGE_PASSWORD_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};
export {
  clearErrors,
  signInAction,
  loadCurrentAdminAction,
  resetPasswordAction,
  changePasswordAction,
};

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userState } from "../types";
import { FormRegisterType, FormLoginType } from "../../pages/Main/data";
import { createOptions } from "../api";
export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (userData: FormRegisterType, { rejectWithValue }) => {
    const response = await fetch(
      "http://127.0.0.1:8000/auth/users/",
      createOptions({ method: "POST", body: JSON.stringify(userData) })
    );

    if (!response.status) {
      return rejectWithValue(initialState);
    }
    return await response.json();
  }
);

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userData: FormLoginType, { rejectWithValue }) => {
    const response = await fetch(
      "http://127.0.0.1:8000/token/",
      createOptions({ method: "POST", body: JSON.stringify(userData) })
    );

    if (!response.status) {
      return rejectWithValue(initialState);
    }
    return await response.json();
  }
);
const initialState: userState = {
  email: "",
  userId: "",
  userName: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.userId = action.payload.id;
      state.userName = action.payload.username;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload.access;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;

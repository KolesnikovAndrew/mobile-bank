import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLoginedUser } from "store/actions/usersActions";

import { User, UserState } from "entities/user/index";

const initialState: UserState = {
  loginedUser: {
    id: "1",
    fullName: "Test user",
    credential: "T",
    icon: "",
  },
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoginedUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLoginedUser.fulfilled, (state, action) => {
      state.loginedUser = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;

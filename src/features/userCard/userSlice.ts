import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  icon: string;
}

const initialState: UserState = {
  name: "John Doe",
  icon: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.icon = action.payload.icon;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

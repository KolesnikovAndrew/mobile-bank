import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "../features/atmsSearch/atmsSlice";
import userReducer from "../features/userCard/userSlice";
const store = configureStore({
  reducer: {
    atm: atmReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export default store;

import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "./reducers/atmsSearch";
import userReducer from "./reducers/user";
import activityDetailsReducer from "./reducers/activityDetails";
const store = configureStore({
  reducer: {
    atm: atmReducer,
    user: userReducer,
    activities: activityDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

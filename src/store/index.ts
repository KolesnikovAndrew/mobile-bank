import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "./reducers/atmsSearch";
import userReducer from "./reducers/user";
import featuredActivitySlidesReducer from "./reducers/featuredActivities";
const store = configureStore({
  reducer: {
    atm: atmReducer,
    user: userReducer,
    featuredActivity: featuredActivitySlidesReducer,
  },
});

console.log(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export default store;

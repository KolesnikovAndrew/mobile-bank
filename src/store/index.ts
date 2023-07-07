import { configureStore } from '@reduxjs/toolkit';
import atmReducer from '../features/atmsSearch/atmsSlice';

const store = configureStore({
  reducer: {
    atm: atmReducer,
    // Другие редюсеры вашего приложения
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export default store;

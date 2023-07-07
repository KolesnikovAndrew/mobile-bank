// features/atm/atmSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Atm } from "../../entities/atms/model/atms";
import { RootState } from "../../store";

interface AtmState {
  atms: Atm[];
}

const initialState: AtmState = {
  atms: [
    {
      id: 1,
      location: "Location 1",
      address: "Address 1",
    },
    {
      id: 2,
      location: "Location 2",
      address: "Address 2",
    },
    {
      id: 3,
      location: "Location 3",
      address: "Address 3",
    },
    {
      id: 4,
      location: "Location 4",
      address: "Address 4",
    },
    {
      id: 5,
      location: "Location 5",
      address: "Address 5",
    },
  ],
};

const atmSlice = createSlice({
  name: "atm",
  initialState,
  reducers: {
    addAtm: (state, action: PayloadAction<Atm>) => {
      state.atms.push(action.payload);
    },
    // Другие действия для обновления состояния банкоматов
  },
});

export const { addAtm } = atmSlice.actions;

export const selectAtmList = (state: RootState) => state.atm.atms;

export default atmSlice.reducer;

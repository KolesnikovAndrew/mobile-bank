import { createSlice } from "@reduxjs/toolkit";
import { Atm } from "entities/atms/model/atms";
import { getAtmsList } from "store/actions/atmsActions";

interface AtmState {
  atms: Atm[];
}

const initialState: AtmState = {
  atms: [],
};

const atmSlice = createSlice({
  name: "atm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAtmsList.fulfilled, (state, action) => {
      console.log("Get atms list");

      state.atms = action.payload;
    });
  },
});

export default atmSlice.reducer;

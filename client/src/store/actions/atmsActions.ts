import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAtmsList = createAsyncThunk("atm/getAtmsList", async () => {
  try {
    const response = await axios.get(`http://localhost:5000/`);
    console.log(response.data.atmsData);
    return response.data.atmsData;
  } catch (error) {
    throw error;
  }
});

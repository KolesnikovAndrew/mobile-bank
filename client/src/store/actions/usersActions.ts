import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLoginedUser = createAsyncThunk(
  "user/getLoginedUser",
  async () => {
    try {
      const response = await axios.get(`http://localhost:5000/`);
      return response.data.userData;
    } catch (error) {
      throw error;
    }
  }
);

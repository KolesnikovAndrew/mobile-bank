import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getActivities = createAsyncThunk(
  "activityDetails/getActivities",
  async () => {
    try {
      const response = await axios.get(`http://localhost:5000/`);

      return response.data.activitiesData;
    } catch (error) {
      throw error;
    }
  }
);

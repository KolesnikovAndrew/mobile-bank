import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Activity } from "entities/activity";
import { getActivities } from "store/actions/activitiesActions";

const initialState: Activity[] = [];

const activityDetailsSlice = createSlice({
  name: "activityDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActivities.fulfilled, (state, action) => {
      state.length = 0;

      const transformedActivities = action.payload.map(
        (unformattedActivity: any) => ({
          activityTitle: unformattedActivity.activity_title,
          activityIcon: unformattedActivity.activity_icon,
          activityId: unformattedActivity.id,
          slides: unformattedActivity.slides.map((unformattedSlide: any) => ({
            slideTitle: unformattedSlide.slide_title,
            slideContent: unformattedSlide.slide_content,
          })),
        })
      );
      state.push(...transformedActivities);
    });
  },
});

export const selectActivity = (state: Activity) => state;

export default activityDetailsSlice.reducer;

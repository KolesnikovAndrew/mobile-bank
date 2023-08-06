// features/atm/atmSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { featuredActivitySlide } from "../../../entities/featuredActivitySlide/index";

interface FeaturedActivitiesState {
  featuredActivityTitle: string;
  slides: featuredActivitySlide[];
}

const initialState = {
  featuredActivities: [
    {
      featuredActivityTitle: "Activity 1",
      slides: [
        {
          slideTitle: "Test",
          slideContent: "Test content",
        },
      ],
    },
    {
      featuredActivityTitle: "Activity 1",
      slides: [
        {
          slideTitle: "Test",
          slideContent: "Test content",
        },
      ],
    },
    {
      featuredActivityTitle: "Activity 1",
      slides: [
        {
          slideTitle: "Test",
          slideContent: "Test content",
        },
      ],
    },
  ],
};

const featuredActivitySlidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    addfeaturedActivity: (
      state,
      action: PayloadAction<FeaturedActivitiesState>
    ) => {
      state.featuredActivities.push(action.payload);
    },
  },
});
console.log(initialState);
export const { addfeaturedActivity } = featuredActivitySlidesSlice.actions;

export const selectActivity = (state: FeaturedActivitiesState) => state.slides;

export default featuredActivitySlidesSlice.reducer;

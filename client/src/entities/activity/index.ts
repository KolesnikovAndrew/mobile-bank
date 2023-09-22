import { Slide } from "shared/sharedTypes";

export interface ActivityProps {
  handleActivityDetailsToggle: (activityId: number) => void;
  activityTitle: string;
  activityId: number;
}

export interface Activity {
  activityTitle: string;
  activityIcon: string;
  activityId: number;
  slides: Slide[];
}

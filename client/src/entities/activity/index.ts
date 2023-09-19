export interface ActivityProps {
  handleActivityDetailsToggle: (activityId: number) => void;
  activityTitle: string;
  activityId: number;
}

export interface Activity {
  activityTitle: string;
  activityIcon: string;
  activityId: number;
  slides: ActivitySlide[];
}

export interface ActivitySlide {
  slideTitle: string;
  slideContent: string;
}

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ActivityProps } from "entities/activity";

const ActivityCard: React.FC<ActivityProps> = ({
  handleActivityDetailsToggle,
  activityTitle,
  activityId,
}) => {
  return (
    <div
      className="w-[80px] h-[80px] bg-blue-500 rounded-lg text-white font-bold cursor-pointer flex items-center justify-center"
      onClick={() => handleActivityDetailsToggle(activityId)}
    >
      {activityTitle}
    </div>
  );
};

export default ActivityCard;

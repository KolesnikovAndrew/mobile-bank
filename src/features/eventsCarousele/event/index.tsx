import React, { ReactNode, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FeaturedActivityProps } from "entities/featuredActivity";

const Event: React.FC<FeaturedActivityProps> = ({
  children,
  handleFeaturedActivitiesCarouselToggle,
}) => {
  return (
    <>
      <div
        className="w-30 h-30 bg-purple-500 rounded-lg text-white font-bold cursor-pointer"
        onClick={handleFeaturedActivitiesCarouselToggle}
      >
        {children}
      </div>
    </>
  );
};

export default Event;

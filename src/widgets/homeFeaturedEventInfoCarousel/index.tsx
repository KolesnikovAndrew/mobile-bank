import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedActivitySlide from "./featuredActivitySlide";
import { FeaturedActivityProps } from "../../entities/featuredActivity";
import { featuredActivitySlide } from "./../../entities/featuredActivitySlide/index";
import { connect } from "react-redux";
import { RootState } from "store";
import { useSelector } from "react-redux";

const FeaturedActivityCarousel: React.FC<FeaturedActivityProps> = ({
  handleFeaturedActivitiesCarouselToggle,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const featuredActivities = useSelector(
    (state: RootState) => state.featuredActivity.featuredActivities
  );

  return (
    <div className="featured-activity-carousel bg-purple-900 text-gray-50 h-screen">
      <button onClick={handleFeaturedActivitiesCarouselToggle}>&times;</button>
      <Slider {...settings}>
        {featuredActivities.map((featuredActivity) =>
          featuredActivity.slides.map((slide, index) => {
            return (
              <FeaturedActivitySlide
                key={index}
                slideTitle={slide.slideTitle}
                slideContent={slide.slideContent}
              />
            );
          })
        )}
      </Slider>
    </div>
  );
};

export default FeaturedActivityCarousel;

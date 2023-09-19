import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityCard from "./activity";
import { Activity } from "entities/activity";

interface ActivitiesCarouselProps {
  activities: Activity[];
  handleActivityDetailsToggle: (activityId: number) => void;
}

const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = ({
  activities,
  handleActivityDetailsToggle,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {activities.map((activity: Activity) => (
          <ActivityCard
            handleActivityDetailsToggle={handleActivityDetailsToggle}
            activityTitle={activity.activityTitle}
            activityId={activity.activityId}
          ></ActivityCard>
        ))}
      </Slider>
    </div>
  );
};

export default ActivitiesCarousel;

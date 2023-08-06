import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event from "./event";
import { FeaturedActivityProps } from "../../entities/featuredActivity";

const FeaturedActivitiesCarousel: React.FC<FeaturedActivityProps> = ({
  handleFeaturedActivitiesCarouselToggle,
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
        <Event
          handleFeaturedActivitiesCarouselToggle={
            handleFeaturedActivitiesCarouselToggle
          }
        >
          Summer deals!
        </Event>
        <Event
          handleFeaturedActivitiesCarouselToggle={
            handleFeaturedActivitiesCarouselToggle
          }
        >
          Summer deals!
        </Event>
        <Event
          handleFeaturedActivitiesCarouselToggle={
            handleFeaturedActivitiesCarouselToggle
          }
        >
          Summer deals!
        </Event>
        <Event
          handleFeaturedActivitiesCarouselToggle={
            handleFeaturedActivitiesCarouselToggle
          }
        >
          Summer deals!
        </Event>
      </Slider>
    </div>
  );
};

export default FeaturedActivitiesCarousel;

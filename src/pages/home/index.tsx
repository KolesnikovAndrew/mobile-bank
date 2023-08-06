import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "store";
import AtmsSearch from "features/atmsSearch";
import Navbar from "shared/ui/navbar";
import UserCard from "features/userCard/index";
import GiftButton from "features/giftButton";
import AtmsSearchWidget from "widgets/atmsSearchWidget";
import FeaturedActivitiesCarousel from "features/eventsCarousele";
import FeaturedActivityCarousel from "widgets/homeFeaturedEventInfoCarousel";

function HomePage() {
  const [isAtmsSearchWidgetOpen, setIsAtmsSearchWidgetOpen] = useState(false);
  const handleWidtgetToggle = () => {
    setIsAtmsSearchWidgetOpen(!isAtmsSearchWidgetOpen);
  };

  const [isFeaturedActivitiesCarouselOpen, setFeaturedActivitiesCarouselOpen] =
    useState(false);

  const handleFeaturedActivitiesCarouselToggle = () => {
    setFeaturedActivitiesCarouselOpen(!isFeaturedActivitiesCarouselOpen);
  };

  return (
    <Provider store={store}>
      <div className="home-page relative">
        <section className="atms-search">
          <AtmsSearch handleWidtgetToggle={handleWidtgetToggle} />
          {isAtmsSearchWidgetOpen && (
            <AtmsSearchWidget
              handleWidtgetToggle={handleWidtgetToggle}
              isWidgetOpen={isAtmsSearchWidgetOpen}
            />
          )}
        </section>
        <section className="user-info">
          <div className="flex items-center place-content-around">
            <UserCard />
            <GiftButton />
          </div>
        </section>
        <section className="events-carousele">
          <FeaturedActivitiesCarousel
            handleFeaturedActivitiesCarouselToggle={
              handleFeaturedActivitiesCarouselToggle
            }
          />
          {isFeaturedActivitiesCarouselOpen && (
            <FeaturedActivityCarousel
              handleFeaturedActivitiesCarouselToggle={
                handleFeaturedActivitiesCarouselToggle
              }
            />
          )}
        </section>
        <Navbar />
      </div>
    </Provider>
  );
}

export default HomePage;

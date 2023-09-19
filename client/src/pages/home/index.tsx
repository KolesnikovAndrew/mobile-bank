import React, { useState, useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "store";
import AtmsSearch from "features/atmsSearch";
import Navbar from "shared/ui/navbar";
import UserCard from "features/userCard/index";
import GiftButton from "features/giftButton";
import AtmsSearchWidget from "widgets/atmsSearchWidget";
import ActivitiesCarousel from "features/activitiesCarousele";
import { AppDispatch, RootState } from "store";
import { getLoginedUser } from "store/actions/usersActions";
import LoadingIndicator from "shared/ui/loadingIndicator";
import SlideCarousel from "shared/ui/slideCarousel";
import { getActivities } from "store/actions/activitiesActions";
import { getAtmsList } from "store/actions/atmsActions";

function HomePage() {
  const userState = useSelector((state: RootState) => state.user);
  const activitiesState = useSelector((state: RootState) => state.activities);
  const atmsState = useSelector((state: RootState) => state.atm);

  const [openedActivityDetailsId, setOpenedActivityDetailsId] =
    useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getLoginedUser());
    dispatch(getActivities());
    dispatch(getAtmsList());
  }, [dispatch]);

  const [isAtmsSearchWidgetOpen, setIsAtmsSearchWidgetOpen] = useState(false);
  const handleWidtgetToggle = () => {
    setIsAtmsSearchWidgetOpen(!isAtmsSearchWidgetOpen);
  };

  const [isActivityDetailsOpen, setActivitiesDetailsOpen] = useState(false);

  const handleActivityDetailsToggle = (id: number) => {
    setActivitiesDetailsOpen(!isActivityDetailsOpen);
    openedActivityDetailsId
      ? setOpenedActivityDetailsId(0)
      : setOpenedActivityDetailsId(id);
  };

  return (
    <Provider store={store}>
      <div className="home-page relative flex flex-col gap-y-10">
        <section className="atms-search">
          <AtmsSearch
            handleWidtgetToggle={handleWidtgetToggle}
            atms={atmsState.atms}
          />
          {isAtmsSearchWidgetOpen && (
            <AtmsSearchWidget
              handleWidtgetToggle={handleWidtgetToggle}
              isWidgetOpen={isAtmsSearchWidgetOpen}
            />
          )}
        </section>
        <section className="user-info">
          <div className="flex items-center justify-between w-full">
            {userState.loading ? (
              <LoadingIndicator />
            ) : (
              <UserCard userData={userState.loginedUser} />
            )}
            <GiftButton />
          </div>
        </section>
        <section className="activities-carousele">
          <ActivitiesCarousel
            handleActivityDetailsToggle={handleActivityDetailsToggle}
            activities={activitiesState}
          />
          <section className="activity-details">
            {isActivityDetailsOpen &&
              activitiesState.map((activity) => {
                return (
                  activity.activityId === openedActivityDetailsId && (
                    <SlideCarousel
                      key={activity.activityId}
                      slides={activity.slides}
                      handleSlideCarouselToggle={handleActivityDetailsToggle}
                    />
                  )
                );
              })}
          </section>
        </section>
        <Navbar />
      </div>
    </Provider>
  );
}

export default HomePage;

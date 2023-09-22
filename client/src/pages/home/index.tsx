import React, { useState, useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "store";
import { AppDispatch, RootState } from "store";
import { getLoginedUser } from "store/actions/usersActions";
import { getActivities } from "store/actions/activitiesActions";
import { getAtmsList } from "store/actions/atmsActions";
import AtmsSearch from "features/atmsSearch";
import AtmsSearchWidget from "widgets/atmsSearchWidget";
import Navbar from "shared/ui/navbar";
import UserCard from "features/userCard/index";
import GiftButton from "features/giftButton";
import LoadingIndicator from "shared/ui/loadingIndicator";
import ActivitiesCarousel from "features/activitiesCarousele";
import SlideCarouselContainer from "features/slideCarouselContainer";
import { ItemWithSlides } from "shared/sharedTypes";
import { Activity } from "entities/activity";

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

    console.log(typeof activitiesState);
  };

  function mapActivitiesToItemsWithSlides(
    activities: Activity[]
  ): ItemWithSlides[] {
    return activities.map((activity) => ({
      title: activity.activityTitle,
      id: activity.activityId,
      slides: activity.slides,
      icon: activity.activityIcon,
    }));
  }

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
        </section>
        <section className="activity-details">
          <div id="modal-root"></div>
          {isActivityDetailsOpen && (
            <SlideCarouselContainer
              modalRootElement={"modal-root"}
              payload={mapActivitiesToItemsWithSlides(activitiesState)}
              openedActivityDetailsId={openedActivityDetailsId}
              handleActivityDetailsToggle={handleActivityDetailsToggle}
              isActivityDetailsOpen={isActivityDetailsOpen}
            />
          )}
        </section>

        <Navbar />
      </div>
    </Provider>
  );
}

export default HomePage;

import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../../store";
import AtmsSearch from "../../features/atmsSearch";
import Navbar from "shared/ui/navbar";
import Widget from "shared/ui/widget";
import UserCard from "./../../features/userCard/index";

import GiftButton from "features/giftButton";

function HomePage() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleWidtgetToggle = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };
  return (
    <Provider store={store}>
      <div className="home-page">
        <section className="atms-search">
          <AtmsSearch handleWidtgetToggle={handleWidtgetToggle} />
          {isWidgetOpen && <Widget onToggle={handleWidtgetToggle} />}
        </section>
        <section className="user-info">
          <div className="flex items-center">
            <UserCard />
            <GiftButton />
          </div>
        </section>
        <Navbar />
      </div>
    </Provider>
  );
}

export default HomePage;

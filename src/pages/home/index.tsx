import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../../store";
import AtmsSearch from "../../features/atmsSearch";
import Navbar from "shared/ui/navbar";
import Widget from "shared/ui/widget";

function HomePage() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleWidtgetToggle = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };
  return (
    <Provider store={store}>
      <div className="home-page">
        <AtmsSearch handleWidtgetToggle={handleWidtgetToggle} />
        {isWidgetOpen && <Widget onToggle={handleWidtgetToggle} />}
        <Navbar />
      </div>
    </Provider>
  );
}

export default HomePage;

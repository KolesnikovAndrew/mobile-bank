import React from "react";
import { Routing } from "pages";
import { withProviders } from "./providers";
import "./index.scss";

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xs w-400 mx-auto p-4 my-auto">
        <Routing />
      </div>
    </div>
  );
};

export default withProviders(App);

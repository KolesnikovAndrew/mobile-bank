import React from "react";
import { Routing } from "pages";
import { withProviders } from "./providers";

const App = () => {
  return (
    <div className="flex justify-center overflow-x-hidden ">
      <div className="max-w-xs w-400 mx-auto p-4 my-auto overflow-x-hidden h-screen">
        <Routing />
      </div>
    </div>
  );
};

export default withProviders(App);

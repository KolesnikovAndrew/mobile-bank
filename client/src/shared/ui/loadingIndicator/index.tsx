import React from "react";

const LoadingIndicator = () => (
  <div className={`flex items-center gap-2 w-full h-full`}>
    <div
      className={`w-2/5 h-full rounded-full animate-pulse`}
      style={{ backgroundColor: "#ccc" }}
    ></div>
    <div
      className={`w-3/5  h-full rounded-lg animate-pulse`}
      style={{ backgroundColor: "#ccc" }}
    ></div>
  </div>
);

export default LoadingIndicator;

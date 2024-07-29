import React from "react";
import Loader from "react-spinners/PulseLoader";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-baseline justify-center space-x-1">
        <h1 className="bg-gradient-to-r from-orange-500 to-[#FF0000] to-80% bg-clip-text text-2xl font-normal tracking-wider text-transparent">
          Loading
        </h1>
        <Loader
          color="#ff0000"
          size={5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loading;

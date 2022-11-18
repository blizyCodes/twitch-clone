import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className="pt-[55px] flex items-center justify-center">
      <PacmanLoader color="#A855F7" />
    </div>
  );
};

export default Loading;

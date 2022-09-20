import React from "react";

const Loading = () => {
  return (
    // Renders when get requests havent mounted
    <div className="h-screen grid place-items-center">
      <p className="text-white text-xl font-bold">Loading...</p>
    </div>
  );
};

export default Loading;

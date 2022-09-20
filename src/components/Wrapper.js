import React from "react";

const Wrapper = (props) => {
  return (
    <div className="container mx-auto items-center px-4 flex flex-col gap-6 lg:px-0">
      {props.children}
    </div>
  );
};

export default Wrapper;

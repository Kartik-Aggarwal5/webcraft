import React from "react";

const Container = ({ children, features = false }) => {
  return (
    <div className="flex w-full flex-col items-center relative z-20">
      <div
        className={`max-w-[1400px] w-full px-10 sm:px-5
      ${features && "sm:px-0"}
      `}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;

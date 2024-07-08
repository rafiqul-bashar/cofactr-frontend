import React from "react";

export default function LoadingStatus() {
  return (
    <div className="h-[80vh] w-full">
      <img
        src="/gears-spinner.svg "
        alt="loading"
        className="h-40 w-40 lg:h-52 lg:w-52 mx-auto mt-[10%] animate-pulse"
      />
    </div>
  );
}

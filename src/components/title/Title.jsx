import React from "react";
import "./Title.css";

export const Title = () => {
  return (
    <div className="container mx-auto m-6">
      <p className="text-2xl font-bold text-white leading-normal">
        Welcome to <font className="text-fifth">TypeWeather</font>
      </p>
      <p className="text-sm	text-sixth leading-normal">Choose a location to see the weather forecast</p>
    </div>
  );
};

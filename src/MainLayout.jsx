import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Waypoint } from "react-waypoint";
import CateGroup from "./components/CateGroup";

const MainLayout = () => {
  const [stick, setStick] = useState(false);

  const handleEnter = () => {
    setStick(false);
  };
  const handleLeave = () => {
    setStick(true);
  };

  const positionHandler = ({ previousPosition, currentPosition }) => {
    if (previousPosition == "above" && currentPosition == "inside") {
      setStick(true);
    } else if (previousPosition == "inside" && currentPosition == "above") {
      setStick(false);
    }
  };
  return (
    <div className="flex relative flex-col ">
      <Header stick={stick} />


      <Outlet />
      <Waypoint onPositionChange={positionHandler} />
      <Footer />
    </div>
  );
};

export default MainLayout;

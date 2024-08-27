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
  return (
    <div className="flex  flex-col min-h-svh ">
      <Header stick={stick} />
      <Waypoint
        topOffset={"-50%"}
        onLeave={handleLeave}
        onEnter={handleEnter}
      />

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

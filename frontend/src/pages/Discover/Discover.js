import React from "react";
import { Routes, Route } from "react-router-dom";
import Department from "./Department";
import DirectorsMessage from "./Director'sMessage";
import Legacy from "./Legacy";
import Mission from "./Mission";
import Vc from "./Vc"

const DiscoverRoutes = () => {
  return (
    <Routes>
      <Route path="/discover/department" element={<Department />} />
      <Route path="/discover/director'smessage" element={<DirectorsMessage />} />
      <Route path="/discover/legacy" element={<Legacy />} />
      <Route path="/discover/mission" element={<Mission />} />
      <Route path="/discover/vc" element={<Vc />} />
    </Routes>
  );
};

export default DiscoverRoutes;

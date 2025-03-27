import React from "react";
import { Routes, Route } from "react-router-dom";
import Admission from "./Admission";
import AdmissionProcess from "./AdmissionProcess";
import Brochure from "./Brochure";
import Eligibility from "./Eligibility";
import EntranceExam from "./EntranceExam"; // Typo fix
import FeeStructure from "./FeeStructure";
import Reservation from "./Reservation";
import Rules from "./Rules";


const AdmissionRoutes = () => {
  return (
    <Routes>
      <Route path="/admission" element={<Admission />} />
      <Route path="/admission/process" element={<AdmissionProcess />} />
      <Route path="/admission/brochure" element={<Brochure />} />
      <Route path="/admission/eligibility" element={<Eligibility />} />
      <Route path="/admission/entrance-exam" element={<EntranceExam />} />
      <Route path="/admission/fee-structure" element={<FeeStructure />} />
      <Route path="/admission/reservation" element={<Reservation />} />
      <Route path="/admission/rules" element={<Rules />} />
    </Routes>
  );
};

export default AdmissionRoutes;
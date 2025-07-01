import React from "react";
import { Routes, Route } from "react-router-dom";
import Faculty from "./Faculty";
import Resources from "./Resources";
import Syllabus from "./Syllabus";
import Courses from "./Courses"; 
import Academicp from "./AcademicPolicies"

const Academics = () => {
  return (
    <Routes>
      <Route path="/academics/faculty" element={<Faculty />} />
      <Route path="/academics/resources" element={<Resources />} />
      <Route path="/academics/syllabus" element={<Syllabus />} />
      <Route path="/academics/courses" element={<Courses />} />
      <Route path="/academics/academicsp" element={<Academicp />} />
    </Routes>
  );
};

export default Academics;

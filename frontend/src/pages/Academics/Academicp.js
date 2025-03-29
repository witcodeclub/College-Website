import React, { useEffect } from "react";

function AcademicPolicies() {
  useEffect(() => {
    document.title = "Academic Policies"; // Title update ho jayega
  }, []);

  return (
    <div>
      <h1>Academic Policies</h1>
    </div>
  );
}

export default AcademicPolicies;


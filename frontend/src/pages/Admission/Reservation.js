import React from "react";

function Reservation() {
  const containerStyle = {
    padding: "40px",
    backgroundColor: "#e8f5e9", // Light green background
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    maxWidth: "900px",
    margin: "auto",
  };

  const headerStyle = {
    backgroundColor: "#1B3B6F", // Dark blue header
    color: "white",
    padding: "15px",
    borderRadius: "10px 10px 0 0",
    textAlign: "center",
    fontSize: "1.8rem",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#4CAF50", // Green theme for table header
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Reservation of Seats</h1>
      <p>
        Reservation of seats for permanent resident/native/domicile of Bihar
        shall be made as per existing rules of Govt. of Bihar.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>Economically Weaker Section (EWS)</td>
            <td style={thTdStyle}>10%</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Backward Class (BC)</td>
            <td style={thTdStyle}>15%</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Extremely Backward Class (EBC)</td>
            <td style={thTdStyle}>18%</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Scheduled Caste (SC)</td>
            <td style={thTdStyle}>16%</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Scheduled Tribes (ST)</td>
            <td style={thTdStyle}>1%</td>
          </tr>
          <tr>
            <td style={thTdStyle}>NRI/Payment Quota Seats</td>
            <td style={thTdStyle}>10%</td>
          </tr>
          <tr>
            <td style={thTdStyle}>
              Wards of Permanent Employees of LNMU
            </td>
            <td style={thTdStyle}>5%</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: "20px" }}>
        Candidates belonging to reserved category and selected under General
        category will not be treated/count under reserved quota.
      </p>
    </div>
  );
}

export default Reservation;

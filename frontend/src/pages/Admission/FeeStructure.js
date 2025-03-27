import React from "react";

function FeeStructure() {
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
    textAlign: "center",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#4CAF50", // Green theme for table header
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Fee Structure</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Particulars</th>
            <th style={thStyle}>B.Tech (Annual)</th>
            <th style={thStyle}>MCA (Per Semester)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>1</td>
            <td style={thTdStyle}>Annual Fee</td>
            <td style={thTdStyle}>₹30,000/-</td>
            <td style={thTdStyle}>Annual Fee</td>
          </tr>
          <tr>
            <td style={thTdStyle}>2</td>
            <td style={thTdStyle}>Tuition Fee</td>
            <td style={thTdStyle}>₹42,000/-</td>
            <td style={thTdStyle}>-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>3</td>
            <td style={thTdStyle}>Miscellaneous</td>
            <td style={thTdStyle}>₹8,000/-</td>
            <td style={thTdStyle}>₹20,000/-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>4</td>
            <td style={thTdStyle}>Examination Fee</td>
            <td style={thTdStyle}>₹1,000/-</td>
            <td style={thTdStyle}>-</td>
          </tr>
          <tr>
            <td style={thTdStyle}><b>Total</b></td>
            <td style={thTdStyle}></td>
            <td style={thTdStyle}><b>₹81,000/-</b></td>
            <td style={thTdStyle}><b>₹20,000/-</b></td>
          </tr>
          <tr>
            <td style={thTdStyle}>5</td>
            <td style={thTdStyle}>Caution Money (Refundable) (One-Time)</td>
            <td style={thTdStyle}>₹2,500/-</td>
            <td style={thTdStyle}>₹2,500/-</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: "30px", color: "#1B3B6F" }}>Hostel Fee</h2>
      <p>
        Lodging charges of <b>₹12,000/- per annum</b> for Institute Campus Hostel & <b>₹18,000/- per annum</b> for University Campus Hostel (400 meters away).
      </p>
      <p>
        Mess charges shall be borne by boarders on a monthly basis. Presently, it is <b>₹2,200/- per month</b> (subject to change as per inflation rate).
      </p>

      <h2 style={{ marginTop: "30px", color: "#1B3B6F" }}>Payment Details</h2>
      <p>
        The institute accepts fees via **Demand Draft** in favor of <b>“W.I.T. LNMU Security Deposit”</b> payable at Darbhanga or through Electronic Fund Transfer (RTGS, NEFT, IMPS) as per the details below:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Particulars</th>
            <th style={thStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>1</td>
            <td style={thTdStyle}>Account Holder Name</td>
            <td style={thTdStyle}>W.I.T. LNMU Security Deposit</td>
          </tr>
          <tr>
            <td style={thTdStyle}>2</td>
            <td style={thTdStyle}>Bank Name</td>
            <td style={thTdStyle}>Punjab National Bank</td>
          </tr>
          <tr>
            <td style={thTdStyle}>3</td>
            <td style={thTdStyle}>Branch</td>
            <td style={thTdStyle}>LNMU Campus, Kameshwara Nagar, Darbhanga</td>
          </tr>
          <tr>
            <td style={thTdStyle}>4</td>
            <td style={thTdStyle}>Account Number</td>
            <td style={thTdStyle}>0108032100000241</td>
          </tr>
          <tr>
            <td style={thTdStyle}>5</td>
            <td style={thTdStyle}>IFSC Code</td>
            <td style={thTdStyle}>PUNB0622700</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: "30px", color: "#1B3B6F" }}>Lateral Entry</h2>
      <p>
        Admission through **Lateral Entry** in the **second year** of B.Tech (CSE & IT) is also allowed for **diploma holders** in relevant programs.
      </p>
    </div>
  );
}

export default FeeStructure;

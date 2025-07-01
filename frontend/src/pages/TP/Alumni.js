import React from "react";


const alumniData = [
  { sl: 1, name: "Amita Kumari", session: "2005-09", organisation: "Canara Bank P.O.", place: "Nagpur" },
  { sl: 2, name: "Ankita Singh", session: "2005-09", organisation: "Yardi Software S/W Engg.", place: "Pune" },
  { sl: 3, name: "Archana Kumari", session: "2005-09", organisation: "Cognizant Associate", place: "Pune" },
  { sl: 4, name: "Dolly Purvey", session: "2005-09", organisation: "C.R.Mit Sol. Pvt. Ltd. Sr. S/W Consultant", place: "Bangalore" },
  { sl: 5, name: "Fariheen Fatma", session: "2005-09", organisation: "Honeywell S/W Engg.", place: "Bangalore" },
  { sl: 6, name: "Khushboo Jalan", session: "2005-09", organisation: "Tech Mahindra Tech Asscociate", place: "Banglore"},
  { sl: 7, name: "Madhu Smita", session: "2005-09", organisation: "ANB S/W Pvt. Ltd., S/W Engg.", place: "Delhi" },
  { sl: 8, name: "Mamta Kumari", session: "2005-09", organisation: "OM Resource Pvt. Ltd., HR Cell", place: "Gurgaon" },
  { sl: 9, name: "Manjari Kumari", session: "2005-09", organisation: "HCL Tech.", place: "Delhi" },
  { sl: 10, name: "Sushma Anupam", session: "2005-09", organisation: "NIC Scientific Engg.", place: "New Delhi" },
  { sl: 11, name: "Swati Verma", session: "2005-09", organisation: "Genpact Headstrong Capital Markets", place: "Noida" },
  { sl: 12, name: "Sadhina Kumari", session: "2005-09", organisation: "TCS, S/W Engg.", place: "Bangalore" },
  { sl: 13, name: "Puja Kumari", session: "2005-09", organisation: "Collectorate, Darbhanga", place: "Bihar" },
  { sl: 14, name: "Prerna Kumari", session: "2005-09", organisation: "Central Bank", place: "Patna" },
  { sl: 15, name: "Pragya Kashyap", session: "2005-09", organisation: "ACTA, S/W Engg.", place: "Delhi" },
  { sl: 16, name: "Riya Raut", session: "2005-09", organisation: "L&T Infotech S/W Engg.", place: "Mumbai" },
  { sl: 17, name: "Pushpam Chaurasia", session: "2005-09", organisation: "Accenture India Pvt. Ltd. SR. S/W", place: "Bangalore" },
  { sl: 18, name: "Sikha Jha", session: "2005-09", organisation: "IBM India Pvt. Ltd.", place: "Bangalore" },
  { sl: 19, name: "Sadhina Jyoti", session: "2005-09", organisation: "IBM India Pvt. Ltd.", place: "Bangalore" },
  { sl: 20, name: "Suman Shakambri", session: "2005-09", organisation: "SDO Office I.T. Assistant", place: "Darbhanga" },
  { sl: 21, name: "Sudhira Kumari", session: "2005-09", organisation: "BPSM, Block I.T. Asst.", place: "Darbhanga" },
  { sl: 22, name: "Vandna Kumari", session: "2005-09", organisation: "Doon Consulting Pvt. Ltd.", place: "Gurgaon" },
  { sl: 23, name: "Jyotashna", session: "2005-09", organisation: "Oracle", place: "USA" },
  { sl: 24, name: "Kalpna Kumari", session: "2005-09", organisation: "Union Bank P.O.", place: "Bangalore" },
  { sl: 25, name: "Ranjit Misra", session: "2005-09", organisation: "IBM", place: "Bangalore" },
  { sl: 26, name: "Jyoti", session: "2005-09", organisation: "TCS", place: "Bangalore" },
  { sl: 27, name: "Surbhi Singh", session: "2005-09", organisation: "ADA", place: "Bangalore" },
  { sl: 28, name: "Adla Sanobar", session: "2005-09", organisation: "N.I.T., Patna", place: "Patna" },
  { sl: 29, name: "Gita Sinha", session: "2005-09", organisation: "N.I.T., Patna", place: "Patna" },
  { sl: 30, name: "Puspi Kumari", session: "2005-09", organisation: "N.I.T., Patna", place: "Patna" },
  { sl: 31, name: "Bindya Kumari", session: "2005-09", organisation: "DCE Darbhanga", place: "Darbhanga" },
  { sl: 32, name: "Minal Kumari", session: "2005-09", organisation: "Oracle", place: "Bangalore" },
  { sl: 33, name: "Jyoti", session: "2005-09", organisation: "CGI", place: "Bangalore" },
  { sl: 34, name: "Soni Khushboo", session: "2005-09", organisation: "Irrigation Deptt.", place: "Gurgaon" },
  { sl: 35, name: "Sweta Jha", session: "2005-09", organisation: "Honeywell", place: "Bangalore" },
  { sl: 36, name: "Poonam Jha", session: "2005-09", organisation: "Nokia", place: "Bangalore" },
  { sl: 37, name: "Shalini Kumari", session: "2005-09", organisation: "Oracle", place: "Bangalore" },
  { sl: 38, name: "Archana Kumari", session: "2006-10", organisation: "TCS", place: "Bangalore" },
  { sl: 39, name: "Madhu Kumari", session: "2006-10", organisation: "PNB S.O.", place: "Meerut" },
  { sl: 40, name: "Priyanka Jha", session: "2006-10", organisation: "Convergies", place: "Pune" },
  { sl: 41, name: "Upma Shilpi", session: "2006-10", organisation: "BOI, I.T. Manager", place: "Noida" },
  { sl: 42, name: "Saija", session: "2006-10", organisation: "Allahabad Bank, ITM", place: "Allahabad" },
  { sl: 43, name: "Pradipti Sharma", session: "2006-10", organisation: "WNS Global Services", place: "Pune" },
  { sl: 44, name: "Shilpi Sharma", session: "2006-10", organisation: "I.T. Manager", place: "Bihar" },
  { sl: 45, name: "Pammi Jha", session: "2006-10", organisation: "TCS", place: "Ghana" },
  { sl: 46, name: "Sinam Gupta", session: "2006-10", organisation: "Oracle", place: "USA" },
  { sl: 47, name: "Shweta Kumari", session: "2006-10", organisation: "RBI Asst.", place: "Patna" },
  { sl: 48, name: "Shraddha Kumari", session: "2006-10", organisation: "KPMG Associate Consultant", place: "Delhi" },
  { sl: 49, name: "Priyanka Kumari", session: "2006-10", organisation: "NIC Scientist", place: "New Delhi" },
  { sl: 50, name: "Ritika Jha", session: "2006-10", organisation: "TCS", place: "Delhi" },
  { sl: 51, name: "Deepika Kumari", session: "2006-10", organisation: "Canara Bank Clerk", place: "Muzaffarpur" },
  { sl: 52, name: "Gunjan Kumari", session: "2006-10", organisation: "SBI Clerk", place: "Patna" },
  { sl: 53, name: "Smita Kumari", session: "2006-10", organisation: "Railtel India Ltd. Dy. Manager", place: "Delhi" },
  { sl: 54, name: "Pooja Kumari", session: "2006-10", organisation: "HP India S/W Engg.", place: "Bangalore" },
  { sl: 55, name: "Payal Sinha", session: "2006-10", organisation: "IOCL Manager", place: "Barauni" },
  { sl: 56, name: "Rakhi Kumari", session: "2006-10", organisation: "Punjab National Bank Asst. Manager", place: "Patna" },
  { sl: 57, name: "Lipi Kumari", session: "2006-10", organisation: "HDFC Bank Clerk", place: "Muzaffarpur" },
  { sl: 58, name: "Amrita Kumari", session: "2006-10", organisation: "Canara Bank PO", place: "Patna" },
  { sl: 59, name: "Nidhi Kumari", session: "2006-10", organisation: "Cognizant Technology Solutions", place: "Pune" },
  { sl: 60, name: "Shruti Kumari", session: "2006-10", organisation: "Infosys S/W Engg.", place: "Bangalore" },
  { sl: 61, name: "Sunita Kumari", session: "2006-10", organisation: "HP S/W Tester", place: "Hyderabad" },
  { sl: 62, name: "Shalini Sinha", session: "2006-10", organisation: "Oracle India Pvt. Ltd.", place: "Hyderabad" },
  { sl: 63, name: "Ankita Kumari", session: "2006-10", organisation: "Infosys Tech. Analyst", place: "Hyderabad" },
  { sl: 64, name: "Shweta Sinha", session: "2006-10", organisation: "HCL Tech.", place: "Noida" },
  { sl: 65, name: "Manisha Kumari", session: "2006-10", organisation: "Wipro S/W Engg.", place: "Pune" },
  { sl: 66, name: "Deepti Kumari", session: "2006-10", organisation: "Syntel S/W Engg.", place: "Chennai" },
  { sl: 67, name: "Divya Kumari", session: "2006-10", organisation: "Capgemini S/W Engg.", place: "Bangalore" },
  { sl: 68, name: "Anamika Kumari", session: "2006-10", organisation: "Oracle Consultant", place: "Noida" },
  { sl: 69, name: "Sneha Kumari", session: "2006-10", organisation: "Accenture Software Consultant", place: "Pune" },
  { sl: 70, name: "Shipra Kumari", session: "2006-10", organisation: "Infosys", place: "Bangalore" },
  { sl: 71, name: "Rashmi Kumari", session: "2006-10", organisation: "Tech Mahindra S/W Engg.", place: "Hyderabad" },
  { sl: 72, name: "Neha Kumari", session: "2006-10", organisation: "Wipro Associate Consultant", place: "Kolkata" },
  { sl: 73, name: "Nitu Kumari", session: "2006-10", organisation: "Infosys QA Analyst", place: "Bhubaneswar" },
  { sl: 74, name: "Richa Kumari", session: "2006-10", organisation: "Capgemini India", place: "Bangalore" },
  { sl: 75, name: "Rupa Kumari", session: "2006-10", organisation: "Syntel Developer", place: "Pune" },
  { sl: 76, name: "Megha Kumari", session: "2006-10", organisation: "IBM India", place: "Gurgaon" },
  { sl: 77, name: "Pallavi Kumari", session: "2006-10", organisation: "Infosys Analyst", place: "Chennai" },
  { sl: 78, name: "Nisha Kumari", session: "2006-10", organisation: "Cognizant S/W Engg.", place: "Hyderabad" },
  { sl: 79, name: "Ritika Kumari", session: "2006-10", organisation: "Oracle Financial Services", place: "Mumbai" },
  { sl: 80, name: "Aarti Kumari", session: "2006-10", organisation: "Wipro Technologies", place: "Pune" },
  { sl: 81, name: "Tanu Kumari", session: "2006-10", organisation: "Tech Mahindra Associate Consultant", place: "Noida" },
  { sl: 82, name: "Nandini Kumari", session: "2006-10", organisation: "HCL Analyst", place: "Noida" },
  { sl: 83, name: "Kritika Kumari", session: "2006-10", organisation: "TCS S/W Developer", place: "Delhi" },
  { sl: 84, name: "Priti Kumari", session: "2006-10", organisation: "Accenture India", place: "Hyderabad" },
  { sl: 85, name: "Supriya Kumari", session: "2006-10", organisation: "Wipro India", place: "Chennai" },
  { sl: 86, name: "Nitu Sinha", session: "2006-10", organisation: "Capgemini Consultant", place: "Pune" }
];
function Alumni() {
  return (
    <div style={{ padding: "20px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#003366" }}>List of Alumni Placed in Various Organizations</h2>
      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#003366", color: "white" }}>
            <tr>
              <th style={thStyle}>Sl. No</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Session</th>
              <th style={thStyle}>Organisation</th>
              <th style={thStyle}>Place</th>
            </tr>
          </thead>
          <tbody>
            {alumniData.map((alum) => (
              <tr key={alum.sl} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{alum.sl}</td>
                <td style={tdStyle}>{alum.name}</td>
                <td style={tdStyle}>{alum.session}</td>
                <td style={tdStyle}>{alum.organisation}</td>
                <td style={tdStyle}>{alum.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  fontWeight: "600",
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ccc",
};

export default Alumni;

import React from 'react';

function AdmissionProcess() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#eef2f5', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '35px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Admission Process</h2>

        <p>
          Dr. APJ Abdul Kalam Women’s Institute of Technology offers admission into its B.Tech programs through a structured and transparent process. Admissions are offered through:
        </p>

        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li><strong>BCECE Board</strong> (Government of Bihar)</li>
          <li><strong>Combined Admission Test (CAT)</strong> conducted by the Institute</li>
        </ul>

        <h3 style={{ color: '#34495e', marginTop: '25px' }}>1. Admission through BCECE Board</h3>
        <p>
          The majority of the seats are filled through the <strong>BCECE Board</strong>, Patna. Candidates are required to register for counselling via the official BCECE website. Seat allotment is done based on JEE (Main) rank and category reservation guidelines set by the Government of Bihar.
        </p>
        <p>
          Once a seat is allotted, the candidate has to report to the college for further admission formalities, including branch confirmation and fee payment.
        </p>

        <h3 style={{ color: '#34495e', marginTop: '25px' }}>2. Admission through CAT (Institute-Level)</h3>
        <p>
          The institute also conducts its own <strong>Combined Admission Test (CAT)</strong> to fill a limited number of seats. This is a separate entrance test conducted for eligible students seeking direct admission.
        </p>
        <p>
          The <strong>application form is available online</strong> on the official college website. Students must fill and submit the form before the deadline. Admit cards are issued digitally, and the examination is conducted at the college campus.
        </p>

        <h3 style={{ color: '#34495e', marginTop: '25px' }}>3. Merit List & Result Publication</h3>
        <p>
          After the CAT exam, a <strong>merit list</strong> is prepared and published on the official website. Students can check their result and rank online. Shortlisted candidates are then invited for the counselling process.
        </p>

        <h3 style={{ color: '#34495e', marginTop: '25px' }}>4. Counselling & Admission</h3>
        <p>
          Qualified candidates are called for an <strong>offline counselling session</strong> at the college. Here, verification of eligibility is done, branch preferences are recorded, and admission is confirmed based on merit and seat availability.
        </p>
        <p>
          After successful counselling, students proceed to complete admission by <strong>paying the required fees</strong>. Once the payment is verified, <strong>branch allocation</strong> is finalized and students receive their admission confirmation.
        </p>

        <h3 style={{ color: '#34495e', marginTop: '25px' }}>Important Points</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li>All admission-related updates are published on the official website.</li>
          <li>The CAT application form and admit card are provided <strong>only online</strong>.</li>
          <li>Admission is strictly based on <strong>merit, eligibility, and availability</strong> of seats.</li>
        </ul>

        <p style={{ marginTop: '25px' }}>
          For the latest notifications, eligibility details, and important dates, please visit the <strong>official website</strong> of the institute regularly or contact the admission cell.
        </p>
      </div>
    </div>
  );
}

export default AdmissionProcess;

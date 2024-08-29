import React, { useState } from 'react';
import './dashboard.css';
import logo from './images/logo.png';
import  profile from './images/profile.png';
import  enroll from './images/enroll.png';
import  club from './images/club.png';
import  management from './images/management.png';
import  mail from './images/mail.png';
import  clinic from './images/clinic.png';
import  attendance from './images/attendance.png';
import profo from './images/profo.png'

const Dashboard = () => {
  // State for the number of students
  const [regularStudents, setRegularStudents] = useState(8);
  const [remedialStudents, setRemedialStudents] = useState(13);
  const [paidClubs, setPaidClubs] = useState(0);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="header">
          <h3>Student Management</h3>
        </div>
        <div className="menu-item">
          <h3>Financial Management</h3>
        </div>
        <div className="menu-item">
          <h3>Quality Control</h3>
        </div>
        <div className="menu-item">
          <h3>Report Delivery</h3>
        </div>
        <div className="menu-item">
          <h3>Attendance</h3>
        </div>
      </div>

      <div className="main-content">
        <h1>Student Management</h1>
        <div className="student-stats">
          <div className="stat-item stat-regular">
            <img src={profile} ></img>
            <h2>{regularStudents}</h2>
            <p>Regular Students</p>
          </div>
          <div className="stat-item stat-remedial">
            <img src={profo} ></img>
            <h2>{remedialStudents}</h2>
            <p>Remedial Students</p>
          </div>
          <div className="stat-item stat-clubs">
            <img src={club} ></img>
            <h2>{paidClubs}</h2>
            <p>In Paid Clubs</p>
          </div>
        </div>

        <h2>Menu</h2>
        <div className="menu-grid">
          <div className="menu-item-grid"><img src={profile} alt="image" className="icon" /><br></br>Regular Enrollment</div>
          <div className="menu-item-grid"><img src={enroll} alt="image" className="icon" /><br></br>Remedial Enrollment</div>
          <div className="menu-item-grid"><img src={club} alt="image" className="icon" /><br></br>Club Management</div>
          <div className="menu-item-grid"><img src={management} alt="image" className="icon" /><br></br>Classroom Management</div>
          <div className="menu-item-grid"><img src={mail} alt="image" className="icon" /><br></br>SMS / EMAIL</div>
          <div className="menu-item-grid"><img src={attendance} alt="image" className="icon" /><br></br>Attendance</div>
          <div></div>
          <div className="menu-item-grid"><img src={clinic} alt="image" className="icon" /><br></br>Clinic</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

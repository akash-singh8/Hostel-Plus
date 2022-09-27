import React from "react";
import "./CSS/dashboard.css";

import bunkerBed from "./images/bunkerbed.png";
import hangout from "./images/hangoutTexting.svg";
import complaints from "./images/complaintSvg.svg";
import service from "./images/service.svg";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="section">
      <div className="box">
        <div className="text">
          <p className="p1">WELCOME TO HOSTEL PLUS</p>
          <p className="p2">ALL HOSTEL NEEDS ON YOUR FINGER TIPS</p>
        </div>
        <img
          src={bunkerBed}
          alt="Bunker Bed"
          className="image"
          style={{ width: "30%" }}
        />
      </div>
      <div id="options">
        <Link to="hangout" className="option">
          <img src={hangout} id="dbhangout" alt="hangout texting" />
          <p>HANGOUT</p>
        </Link>
        <Link to="complaints" className="option">
          <img src={complaints} id="dbcomplaint" alt="complaints" />
          <p>COMPLAINTS</p>
        </Link>
        <Link to="services" className="option">
          <img src={service} id="dbservice" alt="services" />
          <p>SERVICES</p>
        </Link>
      </div>
    </div>
  );
}

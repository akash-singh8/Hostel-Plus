import React from "react";
import "./CSS/sideNav.css";
import dashboard from "./images/dashboard.png";
import services from "./images/services.png";
import complaints from "./images/complaints.png";
import notice from "./images/notice.png";
import hangout from "./images/hangout.png";
import aboutUs from "./images/aboutUs.png";

import { NavLink } from "react-router-dom";

export default function SideNavigation() {
  return (
    <div className="navigation">
      <ul>
        <li className="items">
          <NavLink to="/" className="link">
            <img src={dashboard} alt="Dashboard" className="navIcon" />{" "}
            Dashboard
          </NavLink>
        </li>
        <li className="items">
          <NavLink to="/notice" className="link">
            <img src={notice} alt="notice" className="navIcon" /> Notice
          </NavLink>
        </li>
        <li className="items">
          <NavLink to="/services" className="link">
            <img src={services} alt="services" className="navIcon" /> Services
          </NavLink>
        </li>
        <li className="items">
          <NavLink to="/complaints" className="link">
            <img src={complaints} alt="complaints" className="navIcon" />{" "}
            Complaints
          </NavLink>
        </li>
        <li className="items">
          <NavLink to="/hangout" className="link">
            <img src={hangout} alt="hangout" className="navIcon" /> Hangout
          </NavLink>
        </li>
        <li className="items">
          <NavLink to="/aboutus" className="link">
            <img src={aboutUs} alt="aboutUs" className="navIcon" /> About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

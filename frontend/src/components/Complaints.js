import React from "react";
import "./CSS/complaints.css";
import wifi from "./images/wifiRouter.png";
import carpenter from "./images/carpenter.svg";
import electrician from "./images/electrician.svg";

import { Link } from "react-router-dom";

export default function Complaints() {
  return (
    <div className="section">
      <Link to="wifiComplaint" className="box complaint" id="wifi">
        <div className="text">
          <p className="p1">WIFI COMPLAINTS</p>
        </div>
        <img src={wifi} alt="wifi router" />
      </Link>

      <div className="otherService">
        <Link to="carpenterComplaint" className="carpenter complaint">
          <img src={carpenter} alt="carpenter" />
          <p>CARPENTER</p>
        </Link>
        <Link to="electricityComplaint" className="electrician complaint">
          <img src={electrician} alt="electrician" />
          <p>ELECTRICIAN</p>
        </Link>
      </div>
    </div>
  );
}

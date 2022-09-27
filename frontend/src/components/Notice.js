import React from "react";
import "./CSS/notice.css";
import notice from "./images/notice.svg";
import academicCalendar from "./files/AcademicCalendar2022_23.pdf";
import foodMenu from "./files/foodMenu.pdf";

export default function Notice() {
  return (
    <div className="section">
      <div className="box" id="notice">
        <p className="p1">NOTICE</p>
        <img src={notice} alt="notice" />
      </div>
      <div id="notices">
        <a
          href={academicCalendar}
          target="_blank"
          rel="noopener noreferrer"
          className="noticeBox">
          <div className="liner"></div>
          Academic Calendar 2022-2023
        </a>
        <a
          href={foodMenu}
          target="_blank"
          rel="noopener noreferrer"
          className="noticeBox">
          <div className="liner"></div>
          Hostel Food Menu
        </a>
        <a
          href="https://www.github.com/akash-singh8/Hostel-Plus"
          target="_blank"
          rel="noopener noreferrer"
          className="noticeBox">
          <div className="liner"></div>
          Contribute to &nbsp; <span> HOSTEL+ </span> &nbsp; on &nbsp;{" "}
          <span> Github </span>
        </a>
      </div>
    </div>
  );
}

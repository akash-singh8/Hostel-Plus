import React from "react";
import "./CSS/aboutus.css";
import akash from "./images/akash.png";
import harshit from "./images/harshit.png";
import gauransh from "./images/gauransh.png";
import harsh from "./images/harsh.png";

export default function AboutUs() {
  return (
    <div className="section">
      <div className="head">ABOUT US</div>
      <div className="about">
        <p className="aboutHostel">
          <span>HOSTEL PLUS</span> is an initial software platform that is
          basically an hostel management system which will make every hostel
          needs easy and simple. <span>HOSTEL PLUS</span> will save time for
          students as well as for management.
        </p>
      </div>

      <div className="creators">
        <a
          href="https://www.instagram.com/singh_akash71"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personImage" style={akashImg}>
            <img src={akash} alt="akash" />
          </div>
          <div className="personDetail">
            <p className="name">Akash</p>
            <p className="collageId">21BCE10034</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/chauhan_harshit6607/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personImage othPersonImg">
            <img src={harshit} alt="harshit" />
          </div>
          <div className="personDetail">
            <p className="name">Harshit</p>
            <p className="collageId">21BCE11648</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/gauransh.juneja/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personImage othPersonImg">
            <img src={gauransh} alt="gauransh" />
          </div>
          <div className="personDetail">
            <p className="name">Gauransh</p>
            <p className="collageId"> 21BCE11038</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/harshvardhan__singh__/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personImage othPersonImg">
            <img src={harsh} alt="harsh" />
          </div>
          <div className="personDetail">
            <p className="name">Harsh</p>
            <p className="collageId">21BCE10288</p>
          </div>
        </a>
      </div>
    </div>
  );
}

const akashImg = {
  width: "80px",
  marginBottom: "5px",
};

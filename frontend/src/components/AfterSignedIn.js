import React from "react";
import "./CSS/afterSignedIn.css";
import { NavLink } from "react-router-dom";

function AfterSignedIn() {
  return (
    <NavLink to="/userInfo" className="signedIn">
      <img src={localStorage.getItem("photo")} alt="user" className="userPic" />

      <div className="userDetails">
        <p className="userName" style={{ letterSpacing: "1.2px" }}>
          {localStorage.getItem("fname")}
        </p>
        <p className="userId">{localStorage.getItem("id")}</p>
      </div>
    </NavLink>
  );
}

export default AfterSignedIn;

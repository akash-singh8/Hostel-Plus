import React, { useState } from "react";
import cleaning from "./images/cleaning.svg";
import laundary from "./images/laundary.svg";
import "./CSS/services.css";

export default function Services({ isUserSigned, email }) {
  const [roomNo, setRoomNo] = useState("");

  const requestRoomClean = (event) => {
    event.preventDefault();

    if (!isUserSigned) alert("Please Sign In first");
    else if (roomNo < 0 || roomNo > 800)
      alert("Please enter valid room number");
    else {
      if (window.confirm(`confirm room cleaning at ${roomNo}`)) {
        const hostel = document.getElementById("hostelRoom").value;
        const userData = {
          complaintHead: "Room Cleaning",
          fname: localStorage.getItem("fname"),
          id: localStorage.getItem("id"),
          userEmail: localStorage.getItem("email"),
          toEmail: email,
          floor: roomNo.toString()[0],
          roomNo: roomNo,
          complaint: `Respected, I would state that the room ${roomNo} in ${hostel} hostel was not cleaned properly`,
          hostel: hostel,
        };

        fetch("/complaints", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      }
    }
    setRoomNo("");
  };

  return (
    <div className="section" id="service">
      <div className="box">
        <div id="roomClean">
          <div className="text">
            <p className="p1" style={{ marginLeft: "0" }}>
              ROOM CLEANING
            </p>
          </div>
          <select
            id="hostelRoom"
            className="category complaintInput"
            title="Select your hostel"
            style={{ padding: "8px 12px" }}>
            <option disabled>Hostel</option>
            <option value="Block-1">Block-1</option>
            <option value="Block-2">Block-2</option>
            <option value="Block-3">Block-3</option>
            <option value="Girls">Girls</option>
          </select>
          <form id="requestRoomClean" onSubmit={requestRoomClean}>
            <input
              autoComplete="none"
              name="roomNo"
              type="Number"
              value={roomNo}
              placeholder="Enter your room no."
              id="roomNo"
              required
              onChange={(event) => setRoomNo(event.target.value)}
              title="Enter your room number"
            />
            <div className="signButton">
              <button
                type="submit"
                disabled={!roomNo}
                title="Register Complaint for Room Cleaning">
                Register
              </button>
            </div>
          </form>
        </div>
        <img src={cleaning} alt="cleaning" />
      </div>
      <a
        href="https://wa.me/+919039365510?text=Hey"
        target="_blank"
        rel="noopener noreferrer">
        <div className="box" style={{ "margin-top": "50px" }}>
          <div className="text">
            <p className="p1">LAUNDARY</p>
            <p className="p2 laundary">
              Sunday &middot; Wednesday &middot; Friday
            </p>
            <p className="p2 laundary">Time &rarr; 06:00 PM onwards</p>
          </div>
          <img src={laundary} alt="laundary" />
        </div>
      </a>
    </div>
  );
}

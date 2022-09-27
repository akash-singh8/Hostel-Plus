import React from 'react';
import './CSS/header.css'
import hostelPlus from './images/hostelPlus.png';

export default function Header() {
  return (
    <div className="header">
        <img src={hostelPlus} alt="Hostel Plus"/>
        <h1>HOSTEL PLUS</h1>
    </div>
  )
}

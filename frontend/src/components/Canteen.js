import React from 'react';
import './CSS/canteen.css';
import canteen from './images/canteen.svg';
import fruits from './images/fruits.png';
import vegetables from './images/vegetables.png';
import nonVeg from './images/nonVeg.png';

export default function Canteen() {
  return (
    <div className="section">
        <div className="box canteen">
            <div className="text">
                <p className='p1'>CANTEEN</p>
                <p className="p2">FOOD ORDER</p>
            </div>
            <img src={canteen} alt="kitchen"/>
        </div>

        <div className="foodTypes">
            <div className="fruit food">
                <img src={fruits} alt="fruits" />
                <p className="p1">Fruits</p>
            </div>
            <div className="veg food">
                <img src={vegetables} alt="vegetables" />
                <p className="p1">Vegetarian</p>
            </div>
            <div className="nonVeg food">
                <img src={nonVeg} alt="non-vegetables" />
                <p className="p1">Non-Vegetarian</p>
            </div>
        </div>
    </div>
  )
}

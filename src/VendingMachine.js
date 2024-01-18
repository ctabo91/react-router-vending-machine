import React from "react";
import { Link } from "react-router-dom";



function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h2>Pick an item from the vending machine</h2>
            <img 
                src="https://m.media-amazon.com/images/I/611LnsKrUmL._AC_UY1000_.jpg"
                alt="Vending Machine"
            />
            <ul>
                <li><Link to="/doritos">Doritos</Link></li>
                <li><Link to="/sprite">Sprite</Link></li>
                <li><Link to="/snickers">Snickers</Link></li>
            </ul>
        </div>
    );
}


export default VendingMachine;
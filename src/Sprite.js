import React from "react";
import {Link} from "react-router-dom";


function Sprite() {
    return (
        <div>
            <h2>YIKES!!</h2>
            <img 
                src="https://i.etsystatic.com/23559822/r/il/3ca12f/3489443918/il_570xN.3489443918_ix21.jpg"
                alt="The Grinch Who Stole Sprite"
            />
            <p>Quick! Get <Link to="/">Outta Here!</Link></p>
        </div>
    );
}


export default Sprite;
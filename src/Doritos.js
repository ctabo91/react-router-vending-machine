import React from "react";
import {Link} from "react-router-dom";


function Doritos() {
    return (
        <div>
            <h2>Wrong Dorito!</h2>
            <img 
                src="https://i.redd.it/z6khv6j18bfz.jpg"
                alt="Danny DoRito"
            />
            <p>We should probably <Link to="/">avoid cannibalism</Link></p>
        </div>
    );
}


export default Doritos;
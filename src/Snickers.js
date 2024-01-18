import React from "react";
import {Link} from "react-router-dom";


function Snickers() {
    return (
        <div>
            <h2>I'm not that hungry...</h2>
            <img 
                src="https://pbs.twimg.com/media/Cg5fZ3uXEAAASSA.jpg"
                alt="Gourmet Snickers"
            />
            <p>Go back to more <Link to="/">affordable options</Link></p>
        </div>
    );
}


export default Snickers;
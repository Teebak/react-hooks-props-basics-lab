import React from "react";

function links (props){
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
        <br></br>
        <a href={props.linkedin}>{props.linkedin}</a>
        </div>
    )
}

export default links;
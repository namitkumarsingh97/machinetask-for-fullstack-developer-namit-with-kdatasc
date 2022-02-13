import React from "react";

function Content(props) {
    return (
        <div className="content">
            <h1>{props.name}</h1>
            <p>{props.count}</p>
        </div>
    );
}

export default Content;
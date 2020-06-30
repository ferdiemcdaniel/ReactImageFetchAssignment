import React from 'react';


const ChangeCounter = (props) => {
    return(
        <span style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px"}}>
            <p>{props.label + ": \t" +props.count}</p>
        </span>
    )
}

export default ChangeCounter;
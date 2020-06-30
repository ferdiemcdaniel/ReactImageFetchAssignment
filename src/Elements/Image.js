import React from 'react';

const WIDTH = '640px';
const HEIGHT = '400px';

const Photo = (props) => {
    return(
        <div style={containerStyle}>
            <img src={props.url} alt={""} style={imageStyle}/>
        </div>
    )
}

const imageStyle = {
    objectFit: "scale-down",
    height: "inherit",
    width: "inherit"
};

const containerStyle = {
    border: "1px solid lightgray",
    height: HEIGHT,
    width: WIDTH
};

export default Photo;
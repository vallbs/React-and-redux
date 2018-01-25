import React from 'react';

const Char = (props) => {

    const style = {
        display: "inline-block",
        border: "1px solid #eee",
        padding: "16px",
        margin: "16px",
        textAlign: "center",
        cursor: "pointer"
    };

    return (
        <p 
            onClick={props.clicked} 
            style={style}>
            {props.character}
        </p>
    );
};

export default Char;
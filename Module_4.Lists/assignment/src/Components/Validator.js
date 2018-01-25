import React from "react";

const Validator = (props) => {

    var message = (props.inputText.length >= 5) ? 
        "Text is long enough" : "Text is too short";
        
    return(
        <div>
            <p>{message}</p>
        </div>    
    );
};

export default Validator;
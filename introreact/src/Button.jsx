import React from "react";

function Button(props){
    const { btnText, onClick, disabled } = props;

    return(
    <button onClick = { onClick } disabled={ disabled }>{ btnText }</button>
    )
}

export default Button;
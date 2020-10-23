import React from "react";

function Button(props){
    const { btnText, onClick } = props;

    return(
    <button onClick = { onClick }>{ btnText }</button>
    )
}

export default Button;
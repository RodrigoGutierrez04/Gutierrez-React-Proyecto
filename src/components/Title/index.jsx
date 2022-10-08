import React from "react";

const title = {
    color: 'black',
    textAlign: 'center',
    transform: 'translateY(150px)'
  
  }

export const Title = (props) => {
    return (
        <h1 style={title}>{props.greeting}</h1>
    )
}

export default Title
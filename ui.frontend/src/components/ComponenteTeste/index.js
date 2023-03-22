import React from "react";

const ComponenteTeste = ({people=[]}) => {
    console.log(people);
    return(
     <div>
        <p>Nome:</p>
        <p>Idade: </p>
     </div>
    )
}

export default ComponenteTeste;


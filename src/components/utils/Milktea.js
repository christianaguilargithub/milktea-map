import React from "react";

function Milktea (props) {
    return(
        <div>
            <h1>{props.milkteaList.name}</h1>
            <h6>{props.milkteaList.price.toLocaleString("en-PH",{style: "currency",currency: "PHP"})}
            </h6><p>{props.milkteaList.description}</p>
        </div>
    )
}

export default Milktea;


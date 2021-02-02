import React from "react";

function Milktea(props) {
    return(
        <div>
            <h1>{props.product.name}</h1>
            <h4>{props.product.price.toLocaleString("en-PH",{style: "currency",currency: "PHP"})}
            </h4><p>{props.product.description}</p>
        </div>
    )
}

export default Milktea;


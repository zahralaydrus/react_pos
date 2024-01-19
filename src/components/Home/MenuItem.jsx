//kotakan menu tapi dijadiin satu satu

import { Button } from 'flowbite-react';
import React from "react";
function MenuItem({ name, price, image }) {
    return (
        <div style={{
            backgroundColor: "#C8F2EF",
            border: "1px solid #C8F2EF",
            borderRadius: "5px",
            padding: "10px",
            textAlign: "center",
        }} >
            <img
                src={image}
                alt={name}
                style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    objectFit: "cover",
                    marginBottom: "10px",
                }}
            />
            <div>
                <h1>{name}</h1>
                <span>{price}</span>
            </div>
        </div>
    );
}

export default MenuItem;
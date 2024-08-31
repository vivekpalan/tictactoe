import React from "react";

function Block({onClick,value}){
    return(
        <>
            <div onClick={onClick} className="block">{value}</div>
        </>
    )

}

export default Block;
import React from "react";
import "./Items.css";
import Item from "./item/Item";

const Items = () => {
    let items = ["BATHROOM", "BEDROOM", "MAINTENANCE", "LIVING ROOM", "KITCHEN", "GARAGES", "EXTERIORS", "PLUMBING", "ELECTRICAL SERVICES"];

    return(
        <div className="items--container" >
            {items.map((item, i) => {
                return <Item title={item} key={i} />
            })}
        </div>
    );
}; 

export default Items;
import React from "react";
import { Link } from "react-router-dom";
import GoBack from "./GoBack/GoBack";
import "./Content.css";

const Content = (props) => {
    let data = [];

    switch (props.content) {
        case "bathroom":
            data = ["Cabinetry - Counters", "Caulk & Grout", "Child Proofing", "Drywall - Plaster Repair", "Flooring Installation - Repair", "Paint", "Tile Installation - Repair", "Towel Racks & Bathroom Hardware"];
            break;
        
        case "bedroom":
            data = ["Door Repairs", "Drywall - Sheetrock - Texture Repairs", "Furniture Assembly", "Mirrors - Paintings - Tapestries", "Paint", "Window Repair", "Window Treatments"];
            break;

        case "maintenance":
            data = ["Light Bulbs", "Holiday Decorations", "Insulation & Weather-Stripping", "Painting Touch Ups"];
            break;

        case "living room":
            data = ["Drywall - Sheetrock - Texture Repairs", "Furniture Assembly", "Window Treatments", "Doors Installation", "Mirrors Installation", "TV Mounting"];
            break;
    
        case "kitchen":
            data = ["Backsplash Installation", "Cabinetry Installation - Repair", "Caulk & Grout", "Counter Tops", "Door Intallation - Repair", "Drywall - Plaster - Ceiling Repairs", "Flooring - Tile Installation", "Moulding - Trim", "Window Treatments & Blinds", "Window Repair"];
            break;

        case "garages":
            data = ["Clean-Up & Organization", "Doors & Windows", "Handrails - Stairs", "Epoxy Flooring", "Storage Solutions"];
            break;

        case "exteriors":
            data = ["Door Intallation - Repair", "Door Jams", "Downspouts", "Fascia & Soffit Repair", "Fence & Gate Repair", "Flashing", "Flower Boxes", "Painting Touch-Ups", "Pet Doors", "Play Set Installation", "Mailboxes", "Ramps - Handrails", "Siding Repair", "Sliding Door Installation", "Storm Doors", "French Doors", "Screen Doors", "Window Repair"];
            break;

        case "plumbing":
            data = ["Drain Installation", "Drain Cleaning", "Faucet Installation", "Faucet Repair", "Pipe Installation", "Pipe Repair", "Leak Detection", "Sink Installation", "Sink Repair", "Toilet Installation", "Toilet Repair"];
            break;

        case "electrical services": 
            data = ["Breakers", "Fans Installation", "Lighting", "Outlets Installation", "Switches - Dimmers", "Wiring Upgrades"];
            break;

        default:
            data = [];
            break;
    };

    return(
        <div className="data--container">
            <Link to="/services" className="goBack" ><GoBack /> GO BACK</Link>
            <hr style={{color: "#F3F3F3"}}/>
            <ul className="data--list" >
            {data.map((item, index) => {
                return <li className="data--item" key={index}>{item}</li>
            })}
            </ul>
            <p className="data--end" >and more! Call Today!</p>
        </div>
    );
};

export default Content;
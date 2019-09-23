import React from "react";
import "./Bio.css";

const Bio = () => {
    return(
        <div className="bio--container" >
            <div className="bio--info" >
                <img 
                    src="./assets/Richard.jpg" 
                    alt="Profile" 
                    className="bio--pic" 
                />
                <div className="bio--text" >
                    Richard Yagua - Operations Manager
                </div>
            </div>
            <div className="bio--info">
                <img 
                    src="./assets/Faver.jpg" 
                    alt="Profile" 
                    className="bio--pic" 
                />
                <div className="bio--text">
                    Faver Jimenez - Administration Manager 
                </div>
            </div>
        </div>
    );
};

export default Bio;
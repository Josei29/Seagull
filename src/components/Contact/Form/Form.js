import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = (props) => {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });

    let [showError, setShowError] = useState(false);

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (formData.name.length > 0 && formData.email.length > 0 && formData.message.length > 0 && formData.service !== "") {
            setShowError(false);
            axios.post("https://formspree.io/xqvgwprm", formData).then(res => {
                if(res.status === 200) {
                    console.log(props)
                    props.history.push("/");
                }
            });
        } else setShowError(true);
    };

    return(
        <div className="form--container" >
            {showError ? <p className="errorMessage">Information Missing!</p> : null}
            <form onSubmit={submitHandler} className="form--style">
                <label>Full Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    onChange={changeHandler}
                    className="inputStyle"
                />
                <label>Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="your@email.com" 
                    onChange={changeHandler}
                    className="inputStyle"
                />
                <label>Interested In</label>
                <select name="service" onChange={changeHandler} className="inputStyle">
                    <option value="Select">SELECT</option>
                    <option value="BATHROOM">BATHROOM</option>
                    <option value="BEDROOM">BEDROOM</option>
                    <option value="MAINTENANCE">MAINTENANCE</option>
                    <option value="LIVING ROOM">LIVING ROOM</option>
                    <option value="GARAGES">GARAGES</option>
                    <option value="EXTERIORS">EXTERIORS</option>
                    <option value="PLUMBING">PLUMBING</option>
                    <option value="ELECTRICAL SERVICES">ELECTRICAL SERVICES</option>
                </select>
                <label>Message</label>
                <textarea 
                    name="message" 
                    rows="8" 
                    placeholder="Your Message"
                    onChange={changeHandler}
                    className="inputStyle">
                </textarea>
                <input type="submit" value="SEND" className="submit" />
                <input type="hidden" name="_next" value="https://seagullconstructions.com"/>
            </form>
        </div>
    );
};

export default Form;
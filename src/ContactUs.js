import React, { useState } from 'react';
import "./ContactUs.css"

const ContactUs=()=>{
    return(
        <div id='contact_us'>
            <h1>Contact Us</h1>
            <form id='cont_form'>
                <input placeholder='Name' type='text' required/>
                <input placeholder='Email' type='email' required/>
                <input placeholder='Remarks' type='textarea' required/>
                <input placeholder='Mobile Number' type='tel' required/>
            </form>
        </div>
    );
}

export default ContactUs;

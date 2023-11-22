import React from 'react';
import "./ContactUs.css"

const mail = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const remarks = document.getElementById('rema').value;
    const mobileNumber = document.getElementById('mno').value;

    const mailtoLink = `mailto:app.notenexus@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ARemarks: ${remarks}%0D%0AMobile Number: ${mobileNumber}`;

    window.location.href = mailtoLink;
}

const clear=()=>{
    document.getElementById('name').value='';
    document.getElementById('mail').value='';
    document.getElementById('rema').value='';
    document.getElementById('mno').value='';
}

const handleSubmit=()=>{
    mail();
    clear();
}

const ContactUs=()=>{
    return(
        <div id='contact_us'>
            <h1>Contact Us</h1>
            <form id='cont_form'>
                <input placeholder='Name' type='text' id='name' required/>
                <input placeholder='Email' type='email' id='mail' required/>
                <input placeholder='Remarks' type='textarea' id='rema' required/>
                <input placeholder='Mobile Number' type='tel' id='mno' required/>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;

import React, { useState } from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    const [name, setName] = useState('');
    const [mailid, setMailId] = useState('');
    const [remar, setRemarks] = useState('');
    const [mobile, setMobile] = useState('');

    const mailto = () => {
        window.location.href = `mailto:app.notenexus@gmail.com?subject=Contact%20Us&body=Name:%20${name}%0D%0AEmail:%20${mailid}%0D%0ARemarks:%20${remar}%0D%0AMobile:%20${mobile}%0D%0Amailfrom:${mailid}`;
    };

    return (
        <div>
            <h1 align='center'>Contact us</h1>
            <form>
                <table align='center' className='contac_table'>
                    <tr>
                        <td align='right'>
                            Name:
                        </td>
                        <td>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name Here' />
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>
                            Email Id:
                        </td>
                        <td>
                            <input type='email' required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" value={mailid} onChange={(e) => setMailId(e.target.value)} placeholder='Your Email Id Here' />
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>
                            Remarks:
                        </td>
                        <td>
                            <textarea value={remar} onChange={(e) => setRemarks(e.target.value)} placeholder='Your Remarks Here' />
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>
                            Mobile Number:
                        </td>
                        <td>
                            <input pattern='[0-9]{10}' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Your Mobile Number Here' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type='button' onClick={mailto}>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default ContactUs;

import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact" className="footer">
                <h1 className="Heading">Contact Me</h1>
                <div className="contactCard">
                    <div className="mailHover">
                        <a href="mailto:aditya93941@gmail.com">
                            <img className="contactsLogo" src="https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723778870/%C3%8Dcone_3D-removebg-preview_kxqoxp.png" width="60px" alt="Email" />
                        </a>
                        <p className="mailID">aditya93941@gmail.com</p>
                    </div>
                    <a href='https://www.linkedin.com/in/adithya-potlacheruvu/' target="__blank">
                        <img className="contactsLogo" width="60px" src="https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723774951/Premium_PSD___Linkedin_logo_3d_render_luxury-removebg-preview_qn4dv4.png" alt="LinkedIn" />
                    </a>
                    <a href='https://wa.me/9394194942' target="__blank">
                        <img className="contactsLogo" width="60px" src="https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723774951/Download_Whatsapp_logo__3d_render_-removebg-preview_l1opxy.png" alt="WhatsApp" />
                    </a>
                    <a href='https://github.com/aditya93941' target="__blank">
                        <img className="contactsLogo" width="60px" src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723903102/Free_GitHub_3D_Logo_-_Free_Download_Logos_3D_Logos___IconScout-removebg-preview_gxv5a0.png' alt="GitHub" />
                    </a>
                </div>
                <p className="greetings">Thank You!</p>
            </div>
        );
    }
}

export default Contact;

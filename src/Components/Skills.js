import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div id="skills" className="skillsContainer">
            <h1 className="Heading">Skills</h1>
            <ul className="skills">
                <li className="skillCard">
                    <img src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723722317/HTML5_without_wordmark_color_Logo_PNG_Vector__SVG__Free_Download-removebg-preview_dnyso2.png' width="60px" alt="html logo" />
                    <p>HTML</p>
                </li>
                <li className="skillCard">
                    <img src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723724810/CSS3_-_MI_PORTAL-removebg-preview_1_ohkio9.png' width="90px" alt="html logo" />
                    <p>CSS</p>
                </li>
                <li className="skillCard">
                    <img src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723725308/Bootstrap_5_Logo_PNG_Vector__SVG__Free_Download-removebg-preview_1_yzbwdi.png' width="80px" alt="html logo" />
                    <p>BOOTSTRAP</p>
                </li>
                <li className="skillCard">
                    <img src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723724964/The_First_Step_to_Mastering_JavaScript__JS_-removebg-preview_gt5ak5.png' width="70px" alt="html logo" />
                    <p>JAVASCRIPT</p>
                </li>
            </ul>
            <ul className="skills">
                <li className="skillCard">
                    <img src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723725435/Best_reads__Python_programming___The_MagPi_magazine-removebg-preview_bokfst.png' width="60px" alt="html logo" />
                    <p>PYTHON</p>
                </li>
                <li className="skillCard">
                    <img src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723726285/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail-removebg-preview_p4nb75.png' width="70px" alt="html logo" />
                    <p>SQL</p>
                </li>
                <li className="skillCard">
                    <img src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1723726467/Standardizing_Node_js_Version_in_an_npm_Package-removebg-preview_dadmwa.png' width="100px" alt="html logo" />
                    <p>NODE JS</p>
                </li>
                <li className="skillCard">
                    <img src='https://ik.imagekit.io/ve7kfpijr/1_K0a7xINk0RM5gfXGSN68cw.png' width="90px" alt="html logo" />
                    <p>REACT JS</p>
                </li>
            </ul>
        </div>
        );
    }
}

export default Skills;

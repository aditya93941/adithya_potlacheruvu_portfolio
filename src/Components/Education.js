import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div id="education" className="educationCard">
                <h1 className="Heading">Education Details</h1>
                <div className="study">
                    <div className="studyName">
                        <span>Nxtwave Disruptive Technologies</span><br />
                        <span>Industry Ready Certification in Full-stack Development</span>
                    </div>
                    <span>Oct 2022 - Ongoing</span>
                </div>
                <div className="study">
                    <div className="studyName">
                        <span>Sasi Institute of Technology and Engineering, Tadepalligudem</span><br />
                        <span>Bachelor of Technology in CSE (7.22 CGPA)</span>
                    </div>
                    <span>2020 - 2024</span>
                </div>
                <div className="study">
                    <div className="studyName">
                        <span>Aditya Junior College, Bhimavaram</span><br />
                        <span>Intermediate, MPC (9.04 CGPA)</span>
                    </div>
                    <span>2018 - 2020</span>
                </div>
                <div className="study">
                    <div className="studyName">
                        <span>Gurajada Vidyanikethan EM HS, Ganapavaram</span><br />
                        <span>Secondary School Certificate (9.7 CGPA)</span>
                    </div>
                    <span>2017 - 2018</span>
                </div>
            </div>
        );
    }
}

export default Education;

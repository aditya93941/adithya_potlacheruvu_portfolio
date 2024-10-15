import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="home" className="homeCard">
                <h1 className="mainHeading">Adithya Potlacheruvu</h1>
                <h3 className="roleText">Full Stack Developer</h3>
                <a href="https://drive.google.com/file/d/1ZN2AF8Z9yg0f60fl2tEo90HJnPzRE5J7/view?usp=sharing" className="resume" target='__blank'> My Resume </a>
            </div>
        );
    }
}

export default Home;

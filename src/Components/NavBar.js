import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navBar">
                    <a className="navEle" href="#home">Home</a>
                    <a className="navEle" href="#education">Education</a>
                    <a className="navEle" href="#skills">Skills</a>
                    <a className="navEle" href="#projects">Projects</a>
                    <a className="navEle" href="#certificates">Certificates</a>
                    <a className="navEle" href="#contact">Contact</a>
                </nav>
                <nav className="navBarSmall">
                    <a className="navEle" href="#home">Home</a>
                    <a className="navEle" href="#education">Education</a>
                    <div className="dropdown">
                        <a className="navEle" href="#">More</a>
                        <div className="dropdownContent">
                            <a className="navEle" href="#skills">Skills</a>
                            <a className="navEle" href="#projects">Projects</a>
                            <a className="navEle" href="#certificates">Certificates</a>
                            <a className="navEle" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;

import React, { Component } from 'react';
import VideoBackground from './Components/VideoBackground';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="bgContainer">
                <VideoBackground />
                <NavBar />
                <Home />
                <Education />
                <Projects />
                <Skills />
                <Certificates />
                <Contact />
            </div>
        );
    }
}

export default App;

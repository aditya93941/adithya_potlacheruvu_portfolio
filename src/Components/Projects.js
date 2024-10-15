import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div id="projects" className="projectContainer">
                <h1 className="Heading">Projects</h1>
                <ul className="projectList">
                    <li className="projectCard">
                        <img className="projectImg" src='https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-10-15%20142844.png?updatedAt=1728982766476' alt="Game of Questions"/>
                        <h2>Game of Questions</h2>
                        <a className="projectLink" href="https://game-frontend-gamma.vercel.app/" target='_blank'>Click Here</a>
                    </li>
                    <li className="projectCard">
                        <img className="projectImg" src='https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-10-15%20144558.png' alt="Social Media Tasks"/>
                        <h2>Social Media Tasks</h2>
                        <a className="projectLink" href="https://social-media-tasks.vercel.app/" target='_blank'>Click Here</a>
                    </li>
                    <li className="projectCard">
                        <img className="projectImg" src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1724069184/Screenshot_2024-08-19_173536_ynbjcf.png' alt="Netflix clone"/>
                        <h2>Netflix Clone</h2>
                        <a className="projectLink" href="https://adithyanetflix.ccbp.tech/" target='_blank'>Click Here</a>
                    </li>
                    <li className="projectCard">
                        <img className="projectImg" src='https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-10-15%20144201.png' alt="Fly Buy"/>
                        <h2>Fly Buy</h2>
                        <a className="projectLink" href="https://flybuyhub.ccbp.tech/" target='_blank'>Click Here</a>
                    </li>
                    <li className="projectCard">
                        <img className="projectImg" src='https://res.cloudinary.com/dm3fmkz3f/image/upload/v1724071984/Screenshot_2024-08-19_182242_drerx9.png' alt="FoodMunch"/>
                        <h2>Food Munch</h2>
                        <a className="projectLink" href="https://adithyafoodweb.ccbp.tech/" target='_blank'>Click Here</a>
                    </li>
                    <li className="projectCard">
                        <img className="projectImg" src='https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-08-20%20115300.png' alt="Bookmark Maker"/>
                        <h2>Bookmark Maker</h2>
                        <a className="projectLink" href="https://adithyabookmark.ccbp.tech/" target='_blank'>Click Here</a>
                    </li>
                    <li className="projectCard">
                        <img className="projectImg" src='https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-08-20%20115349.png' alt="Popular Podcasts"/>
                        <h2>Popular Podcasts</h2>
                        <a className="projectLink" href="https://adipodcast1.ccbp.tech/" target='_blank'>Click Here</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Projects;

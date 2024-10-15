import React, { Component } from 'react';

class VideoBackground extends Component {
    render() {
        return (
            <div className="video-background">
                <video id="background-video" autoPlay muted loop>
                    <source src="https://videos.pexels.com/video-files/10755267/10755267-hd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

export default VideoBackground;

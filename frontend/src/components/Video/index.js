import React, { Component } from 'react';

class Video extends Component {
    
    render() {
        // console.log(this.props);
        return (
            <p>{this.props.videoName}</p>
        );
    }
}

export default Video;
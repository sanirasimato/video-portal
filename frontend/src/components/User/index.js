import React, { Component } from 'react';
import './user.css';

class User extends Component {
    constructor(){
        super();
        this.state = {
            videos: []
        }
    };

    // getVideoCount = () => {
    //     let videos = this.state.videos.map((video) => {
    //         console.log(video);
    //         console.log(this.props.user);
    //         // if(this.props.user._id === video.userId){
    //         //     this.props.user.__v++;
    //         //     return true;
    //         // }
    //         return (
    //             false
    //             // <User key={video._id} name={video.videoName} id={video._id} />
    //         );
    //     });
    // };

    // componentDidMount() {
    //     fetch('http://localhost:3001/api/video')
    //         .then(results => {
    //             return results.json();
    //         }).then(data => {
    //             this.setState({ videos: data.data });
    //         });
    // };

    render() {
        
        return (
            <div className="user-view">
                <h4>{this.props.name}</h4>
                <p>Loading...</p>
                {/* <p>{this.props.user ? this.props.user : 'Loading...'}</p> */}
            </div>
        );
    }
}

export default User;
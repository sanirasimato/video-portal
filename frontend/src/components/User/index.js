import React, { Component } from 'react';
// import Video from '../Video'
import './user.css';

class User extends Component {
    constructor(){
        super();
        this.state = {
            videos: [],
            count: 0
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

    componentWillMount() {
        fetch('http://localhost:3001/api/video')
            .then(results => {
                return results.json();
            }).then(data => {
                let videos = data.data.map((video) => {
                    if (this.props.id === video.userId) {
                        // console.log(this.props.id);
                        console.log();
                        // console.log(this.state.count+1);
                        // this.setState({count: this.count++})
                        // return(
                        //     <p>{this.state.count+1}</p>
                        // );
                    }
                    // console.log(video);
                    return(
                        <div key={video._id} videoName={video.videoName} userId={video.userId}>
                        </div>
                    )
                })
                
                this.setState({ videos: videos });
            });
    };

    render() {
        
        return (
            <div className="user-view">
                <div className="user-name-container">
                    <div className="user-name">
                        <h4>{this.props.name}</h4>
                    </div>
                    <div className="user-vid-count">
                        {/* <p>{this.state.videos}</p> */}
                        {/* <p>{this.props.id}</p> */}
                        {/* <p>{this.state.count}</p> */}
                        {/* <p>Loading...</p> */}
                        {/* <p>{this.state.count}</p> */}
                    </div>
                </div>
                <div>

                </div>
                {/* <p>{this.props.user ? this.props.user : 'Loading...'}</p> */}
            </div>
        );
    }
}

export default User;
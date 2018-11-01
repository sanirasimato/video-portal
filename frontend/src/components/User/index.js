import React, { Component } from 'react';
// import Video from '../Video'
import './user.css';

class User extends Component {
    constructor(props){
        super();
        this.state = {
            videos: [],
            count: 0
        }
    };

    componentWillMount() {
        fetch('http://localhost:3001/api/video')
            .then(results => {
                return results.json();
            }).then(data => {
                let tempCount = 0;
                data.data.map((video) => {
                    if (this.props.id === video.userId) {
                        console.log(this.props.id);
                        tempCount += 1;
                    }
                    return tempCount;
                })
                this.setState({ count: tempCount});
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
                        <p>{this.state.count}</p>
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
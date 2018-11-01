import React, { Component } from 'react';
import './user.css';

class User extends Component {
    constructor(props){
        super();
        this.state = {
            count: null
        }
        this.getVideoCount = this._getVideoCount.bind(this);
    };

    componentWillMount() {
        this.getVideoCount()
    };

    /**
     * get the video count for each user
     */
    _getVideoCount = () => {
        fetch('http://localhost:3001/api/video')
            .then(results => {
                return results.json();
            }).then(data => {
                let tempCount = 0;
                data.data.map((video) => {
                    if (this.props.id === video.userId) {
                        tempCount += 1;
                    }
                    return tempCount;
                })
                this.setState({ count: tempCount});
            });
    }

    render() {
        return (
            <div className="user-view">
                <div className="user-name-container">
                    <div className="user-name">
                        <h5>{this.props.name}</h5>
                    </div>
                    <div className="user-vid-count">
                        <h5>{this.state.count ? this.state.count : "loading..."}</h5>
                    </div>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default User;
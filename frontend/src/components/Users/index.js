import React, { Component } from 'react';
import User from '../User';
import { USER_LIMIT } from './../../config/config';
import './users.css'

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            page: 1,
            skip: 0,
            disablePrev: false,
            disableNext: false
        };
        this.next = this._goNext.bind(this);
        this.previous = this._goPrevious.bind(this);
    }

    componentDidMount() {
        this.getData(0, USER_LIMIT);
    }

    getData(skip, limit){
        fetch('http://localhost:3001/api/user')
            .then(results => {
                return results.json();
            }).then(data => {
                let users = data.data.map((user)=>{
                    return user;
                })
                if (this.state.page === 1){
                    this.setState({
                        disablePrev: true
                    });    
                }
                if(users.length<=skip+limit){
                    this.setState({
                        disableNext: true
                    });
                }
                this.setState({ 
                    users: users.slice(skip, skip+limit),
                });
            });
    }

    /**
     * pagination fetch the previous slice of data from the api call
     */
    _goPrevious = () => {
        this.getData(this.state.skip - USER_LIMIT, USER_LIMIT);
        this.setState({
            page: this.state.page - 1,
            skip: this.state.skip - USER_LIMIT,
            disableNext: false
        });
    };

    /**
     * pagination fetch the next slice of data from the api call
     */
    _goNext = () => {
        this.getData(this.state.skip + USER_LIMIT, USER_LIMIT);
        this.setState({
            page: this.state.page + 1,
            skip: this.state.skip + USER_LIMIT,
            disablePrev: false
        });
    };

    render() {
        let users = this.state.users.map((user) => {
            return (
                <User key={user._id} name={user.firstName +' '+ user.lastName} id={user._id}/>
            );
        });

        return (
            <div className="user-collection">
                <div className="pagination-btn-set">
                    <button className="custom-btn" onClick={this.previous} disabled={this.state.disablePrev}>Prev</button>
                    <button className="page-number" >{this.state.page}</button>
                    <button className="custom-btn" onClick={this.next} disabled={this.state.disableNext}>Next</button>
                </div>
                <div className="table-head">
                    <p>Users</p>
                    <p>Video Count</p>
                </div>
                {users}
            </div>
        )
    }
}

export default Users;
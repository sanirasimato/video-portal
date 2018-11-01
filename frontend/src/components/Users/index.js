import React, { Component } from 'react';
import User from '../User';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import Video from '../video';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/user')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ users: data.data });
            });
    }

    render() {
        let users = this.state.users.map((user) => {
            return (
                <User key={user._id} name={user.firstName +' '+ user.lastName} id={user._id} vidCount={0}/>
            );
        });

        return (
            <div>
                {users}
            </div>
        )
    }
}

export default Users;
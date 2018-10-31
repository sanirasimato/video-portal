import React, { Component } from 'react';
// import User from '../User'

class Users extends Component {
    constructor(){
        super();
        this.state = {
            users : []
        };
    }

    componentWillMount(){
        fetch('http://localhost:3001/api/user')
        .then(results => {
            return results.json();
        }).then(data => {
            // console.log(data);
            // let users = data.data.map((user) =>{
            //     return (
            //         user
            //         // <div>
            //         //     <h1>{user}</h1>
            //         // </div>
            //     );
            // });
            this.setState({users:data.data});
            // console.log(data.data);
            // this.setState({users:data.data});
            // this.setState({ users: users});
            // console.log("state: " + this.state.users.results);
            // let users = data.results.map((user) => {
            //         return{
                        
            //         };
            // })
        });
    }

    render() {
        // return
        let users = this.state.users.map(user => {
            return(<p>{user.firstName}</p>);
        })
        return (
            {users}
            // <div>
            //     {/* <p>{this.state.users}</p> */}
            //     {/* <User></User> */}
            // </div>
        );
    }
}

export default Users;
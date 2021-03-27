import React, { Component } from 'react';
/* 
Improving fetch api with ability to fetch user provided number of users (cannot exceed 20)
 */
export default class Fetch_Random_Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true, 
            amount : 10,
            users : []
        }
    }

    async componentDidMount() {
        const url = `https://api.randomuser.me/?results=${this.state.amount}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading : false,
            users : data.results
        });
    }


    render() { 

        // if user requests more than 20 users, alert them with error and return, stop execution of render fn.
        if (this.props.amount > 10) {
            alert("cannot fetch more than 10 users at a time")
            return;
        }


        if (this.state.loading) {
            return (<div>loading...</div>)
        }

        if (!this.state.users.length < 0) {
            return (<div>Didn't get any users</div>)
        }

        return(
            <div className="App-fetch-users">
                {this.state.users.map((user, index) => (      
                    <div 
                        key={`some-person-${index}`} 
                        style={{border : "2px solid black", padding : "20px"}}>
                            <img src={user.picture.large} alt="picture of the user"/>
                            <div>
                                <strong>Name: </strong>{user.title} {user.name.first} {user.name.last}
                            </div>
                            <div>
                                <strong>Email: </strong> {user.email}
                            </div>
                            <div>
                                <strong>Phone number: </strong> {user.phone}
                            </div>
                    </div>
                ))}
            </div>
        )


    }
}
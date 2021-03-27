import React, { Component } from 'react';

/* Fetch API made while learning React
 */
export default class Fetch_Random_User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: null
        }
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading : false,
            user : data.results[0]
        });
    }

    render() { 
        const {loading, user} = this.state;

        return (
            <div className="App-fetch-user" style={{ border: "2px solid black", padding: "20px"}}>
                { loading || !user 
                ? 
                    <div>loading...</div>
                : 
                    <div>
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
                }
            </div>);
    }
};
import React, { Component } from 'react';
import './sign_in_form.sass';

const initialState = {
    name : "",
    email : "",
    password : "",
    nameError : "",
    emailError : "",
    passwordError : ""

}

export default class Sign_In_Form extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox"; 
        this.setState({
            [event.target.name] :
                isCheckbox ?
                event.target.checked :
                event.target.value
        })
    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (!this.state.name) {
            nameError = "Name is required";
        }

        if (emailError || nameError) {
            this.setState({emailError, nameError});
            return false;
        }

        return true;
    }

    handleSubmit = event => {
        const isValid = this.validate();
        event.preventDefault();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    }


    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <div style={{fontsize : 12, color : "red" }}>{this.state.nameError}</div>
                </div>
                <div>
                    <input 
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div style={{fontsize : 12, color : "red" }}>{this.state.emailError}</div>
                </div>
                <div>
                    <input 
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div style={{fontsize : 12, color : "red" }}>{this.state.passwordError}</div>
                </div>
                <button type="submit">Submit</button>
            </form>
         );
    }
};
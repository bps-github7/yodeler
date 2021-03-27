import React, { Component } from 'react';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "ben",
            description : "A stinky weasel who live in a hole",
            rememeberMe : true,
            proper_title : "Mr"
        }
    }

    handleChange = (event, fieldType) => {
        console.log(fieldType);
        this.setState({
            title : event.target.title
        })
    }

    handleDescriptionChange = event => {
        this.setState({
            description : event.target.description
        })
    }

    handleCheckChange = event => {
        this.setState({
            rememeberMe : event.target.checked
        })
    }

    handleSelectChange = event => {
        this.setState({
            proper_title : event.target.value
        })
    }

    submit = event => {
        console.log(this.state);        
    }


    render() { 
        return (
        <div classtitle="App-form">
            <input value={this.state.title} onChange={(event) => this.handleChange(event, 'name')} type="text"/>
            <textarea value={this.state.description} onChange={(event) => {this.handleChange(event, 'description')}} type="text">
            </textarea>
            <input type="checkbox" onChange={this.handleCheckChange} checked={this.state.rememeberMe}/>
            <select value={this.state.proper_title} onChange={this.handleSelectChange}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="your honor">Your Honor</option>
            </select>
            <button onClick={this.submit}>Submit form</button>







        </div> );
    }
}
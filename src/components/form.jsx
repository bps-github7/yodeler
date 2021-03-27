import React, { Component } from 'react';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "Issac Henry",
            description : "The inventor of the cosmic Bolt smeller",
            rememberMe : true,
            proper_title : "Mr"
        }
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
    handleSubmit = event => {
        event.preventDefault();
        console.log(`${this.state.proper_title} ${this.state.title} is ${this.state.description}.\nHE once put a coin so far down his throat that his mom stopped loving him: ${this.state.rememberMe}`);        
    }


    render() { 
        return (
        <form 
            onSubmit={this.handleSubmit}
            classtitle="App-form">
                <label htmlFor={this.props.inputLabels[0]}>{this.props.inputLabels[0]}</label>
                <input
                    name="title"
                    value={this.state.title} 
                    onChange={this.handleChange} 
                    type="text"/>
                <br/>
                <label htmlFor={this.props.inputLabels[1]}>{this.props.inputLabels[1]}</label>
                <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}>
                </textarea>
                <br/>
                <label htmlFor={this.props.inputLabels[2]}>{this.props.inputLabels[2]}</label>
                <input 
                    name="rememberMe"
                    type="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.rememberMe}/>
                <br/>
                <label htmlFor={this.props.inputLabels[3]}>{this.props.inputLabels[3]}</label>
                <select
                    name="proper_title"
                    value={this.state.proper_title} 
                    onChange={this.handleChange}>
                        <option value="Sir">Sir</option>
                        <option value="Siree">Siree</option>    
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="your honor">Your Honor</option>
                </select>
                <button type="submit">Submit form</button>
        </form> );
    }
}
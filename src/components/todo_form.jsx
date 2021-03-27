import React, { Component } from 'react';
import shortid from 'shortid';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            placeholders: [
                "Pet my Cat today",
                "Dont eat my fries!",
                "Find the golden chicken",
                "Watch your trans fat",
                "Collect strands of hair",
                "Stay away from all chihuahuas",
                "Make the garlicly smell go away",
                "Take out the agressive groundhog colony",
                "Research rice snacks",
                "Fight for your right to partaaaay"
            ],
            placeholder_index : 0
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.text) {
            //prevent user from submitting blank todos
            return;
        }
        this.props.onSubmit({
            text : this.state.text,
            complete : false,
            id : shortid.generate()
        });
        //helps to print 'funny' message in placeholder while
        //avoiding an index_error.
        const current_index = this.state.placeholder_index;
        const max = this.state.placeholders.length - 1;
        this.setState({
            text: "",
            placeholder_index: current_index < max ? this.state.placeholder_index + 1 : 0 
        })
    }


    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder={this.state.placeholders[this.state.placeholder_index]}/>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>
        );
    }
};
import React, { Component } from 'react';
import shortid from 'shortid';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            text : this.state.text,
            complete : false,
            id : shortid.generate()
        });
        this.setState({
            text: ""
        })
    }


    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="..."/>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>
        );
    }
};
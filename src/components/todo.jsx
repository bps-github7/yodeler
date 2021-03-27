import React, { Component } from 'react';
export default props => (
    <div
        style={{textDecoration : props.todo.complete ? 'line-through' : ""}}
        onClick={props.toggleComplete}>
    <input
        checked={props.complete}
        // onChecked={props.toggleComplete}
        type="checkbox"/>
    {props.todo.text}
    </div>
)

    
import React, { Component } from 'react';
import Todo from './todo';
import TodoForm from './todo_form';

/* 
TODO MVC
1. Add todo
2. Display Todos
3. cross off todos
4. show number of active todos
5. filter all, active and complete
6. delete todo
7. delete all complete
    7.1 only show if at least one is completed
8. button to toggle all on/off
*/



export default class Todo_List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos : []
        }
    }

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos : this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        id : todo.id,
                        text : todo.text,
                        complete : !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        })
    }

    render() { 
        return (
            <div className="App-todo_list">
                <h3>To do:</h3>
                <TodoForm onSubmit={this.addTodo}/>
                {/* {JSON.stringify(this.state.todos)} */}
                {this.state.todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        todo={todo}/>
                    ))
                }
                <div>Todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
            </div>
          );
    }
}
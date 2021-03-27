import React, { Component } from 'react';
import Todo from './todo';
import TodoForm from './todo_form';
import './todo_list.sass';
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
9. button to clear the list
*/



export default class Todo_List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos : [],
            filter : 'all',
            toggleAllComplete : false
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

    updateFilter = (predicate) => {
        this.setState({
            filter : predicate
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    deleteAllCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    deleteAll = () => {
        if (window.confirm("Are you sure you want to delete the entire list?\n (this action cannot be undone)")) {
            this.setState({
                todos : []
            })
        }
        return;
        
    }

    render() {
        let todos = [];

        if (this.state.filter === "all")
            todos = this.state.todos;
        else if (this.state.filter === "active")
            todos = this.state.todos.filter(todo => !todo.complete);
        else if (this.state.filter === "completed")
            todos = this.state.todos.filter(todo => todo.complete);

        return (
            <div className="App-todo_list">
                <h3>To do: <TodoForm onSubmit={this.addTodo}/></h3>
                {/* {JSON.stringify(this.state.todos)} */}
                {todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        deleteTodo={() => this.handleDeleteTodo(todo.id)}
                        todo={todo}/>
                    ))
                }
                <div>Todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
                <div style={{border : "2px solid black"}}>
                    <h3>Filter todos:</h3>
                    <button onClick={() => this.updateFilter("all")}>All</button>
                    <button onClick={() => this.updateFilter("active")}>Active</button>
                    <button onClick={() => this.updateFilter("completed")}>Completed</button>
                </div>
                {/* delete all completed switch- conditional- only appears if there is at least one compelted */}
                <div style={{border: "2px dotted black"}}>
                    { this.state.todos.some(todo => todo.complete) ? 
                    <button onClick={this.deleteAllCompleted}>Remove all completed Todos</button>
                    : null}
                    <button 
                        onClick={() => 
                        this.setState({
                            todos: this.state.todos.map(todo => ({
                                ...todo,
                                complete: this.state.toggleAllComplete
                            })),
                            toggleAllComplete : !this.state.toggleAllComplete    
                        })}
                    >
                        Toggle All: {`${this.state.toggleAllComplete}`}
                    </button>
                    <button onClick={this.deleteAll}>Clear Todo list (delete all todos)</button>
                </div>
            </div>
          );
    }
}
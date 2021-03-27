import React, { Component } from 'react';
import './app.css';
import Bootstrap_nav from './components/bootstrap_nav';
import Counter from './components/counter'
import Fruit_Slider from './components/fruit_slider';
import Form from './components/form';
import Sign_In_Form from './components/sign_in_form';
import Fetch_Random_Users from './components/fetch_random_users';
import Fetch_Random_User from './components/fetch_random_user';
import Todo_List from './components/todo_list';

/* 
Note there are two ways of making a component
1. extend React.Component with a class
2. write a function that returns JSX

the function option has many drawbacks- no state, props is positional args.
Component can do these and more, but function might be convenient in a squeeze.
 */
const Frog = props => (
    <p className="App-frog">
        function component: no this- instead just call 'props'. <br/>
        There once was a frog named {props.title}

        <br/><br/>
        NOTE: there is no 'this' in fns and they cant have state,
    </p>
);

class App extends Component {
    // state = { }
    state = { 
        count : 0
     }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }




    render() {
        return (
            <div className="App" >
                <Todo_List/>
            </div>
        )
        
            
    }
}
 
export default App;
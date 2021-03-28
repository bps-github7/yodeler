import React, { Component } from 'react';
import './app.css';

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
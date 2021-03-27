import React, { Component } from 'react';
// import logo from 'logo.svg';
import './app.css';
import Bootstrap_nav from './components/bootstrap_nav';
import Counter from './components/counter'
import Fruit_Slider from './components/fruit_slider';
import Form from './components/form';

const Frog = props => (
    <p className="App-frog">
        function component: no this- instead just call 'props'. <br/>
        There once was a frog named {props.title}

        <br/><br/>
        NOTE: there is no 'this' in fns and they cant have state,
    </p>
);

//write a component with a class that extends Component class
class App extends Component {

    state = {
        visible : true,
    }



    render() {
        return (
            <div className="App" >
                <div className={this.state.visible ? "visible" : "hidden"}>
                    <Counter/>
                </div>
                <button
                    onClick={() => {
                        this.setState({ visible : !this.state.visible });
                    }}>
                    Toggle counter
                </button>
                <Fruit_Slider/>
                <Form inputLabels={["title", "description", "rememeberMe", "properTitle"]}/>
            </div>
        )
        
        // const buttonText = this.state.visible ? "hide" : "show";
        // const slider = this.state.visible ? <Fruit_Slider></Fruit_Slider> : null
        // return (
        // <div>
        //     <Bootstrap_nav/>
        //     <main role="main" class="container">
  
        //         <div class="starter-template">
        //             {slider}
        //             <button onClick={() => this.setState({
        //                 visible : !this.state.visible
        //             })}>
        //                 {buttonText}
        //             </button>
        //         </div>
        //         <Counter/>
        //     </main>
        // </div>
            // );
    }
}
 
export default App;
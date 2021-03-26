import React, { Component } from 'react';
// import logo from 'logo.svg';
import './app.css';
import Bootstrap_nav from './components/bootstrap_nav';
import Counter from './components/counter'
import MyHeader from './components/header';
import Body from './components/body';


const Frog = props => (
    <p className="App-frog">
        function component: no this- instead just call 'props'. <br/>
        There once was a frog named {props.title}
    </p>
);

//write a component with a class that extends Component class
class App extends Component {
    state = {  }



    render() { 
        return (
        <div>
            <MyHeader title="Panda"/>
            <Frog title="Brimothy"/>
            <Body sentence={{
                subject : "she",
                pronoun: "her",
                verb: "attack",
                adjective : "tremendous",
                noun : "theighs"
            }}
            myArr={[1,2,3,4,5]}
            myFunction={(a,b) => a + b}/>
            {/* <Bootstrap_nav/> */}
            {/* <main role="main" class="container">
  
                <div class="starter-template">
                    <h1>Bootstrap starter template</h1>
                    <p class="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
                </div> */}
                <Counter/>
        
            {/* </main> */}
        </div>
            );
    }
}
 
export default App;
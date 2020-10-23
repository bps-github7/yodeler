import React, { Component } from 'react';
// import logo from 'logo.svg';
import './app.css';
import Bootstrap_nav from './components/bootstrap_nav';
import Counter from './components/counter'

class App extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <Bootstrap_nav/>
  
            <main role="main" class="container">
  
                <div class="starter-template">
                    <h1>Bootstrap starter template</h1>
                    <p class="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
                </div>
                <Counter/>
        
            </main>
        </div>
            );
    }
}
 
export default App;
import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    add(a, b) { 
        return(a + b);
    }

    render() { 
        return ( <p className="App-intro">
        {this.props.sentence.subject} {this.props.sentence.verb}ed <code>MR. PORKCHOPS</code> with {this.props.sentence.pronoun} {this.props.sentence.adjective}, sweaty, meat-loaf covered {this.props.sentence.noun} <br/>
    </p> );
    }
}
 
export default Body;
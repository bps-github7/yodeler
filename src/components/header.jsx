import React, { Component } from 'react';
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="App-header">
            component made out a class: We love grass eating {this.props.title} but not leaf eating ones!
        </div>
          );
    }
}
 
export default header;
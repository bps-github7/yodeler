import React, { Component } from 'react';
class counter extends Component {
    state = { 
        count : 1
     }

    constructor() {
        super();
    }


    render() { 
        let classes = this.getBadgeClasses();
        return ( 
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={ () => this.changeCount(1) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.changeCount(-1) } className="btn btn-secondary btn-sm">Decrement</button>
                
            </div>
         );
    }

    changeCount = amount => this.setState({  count : this.state.count += amount });
    



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
        
    }

}
 
export default counter;
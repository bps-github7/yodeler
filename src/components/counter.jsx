import React, { Component } from 'react';
class counter extends Component {

    render() { 
        let classes = this.getBadgeClasses();
        return ( 
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={ this.props.increment } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ this.props.decrement } className="btn btn-secondary btn-sm">Decrement</button>
                
            </div>
         );
    }

    changeCount = amount => this.setState({  count : this.state.count += amount });
    
    componentWillUnmount() {
        console.log("unmounting...");
    }

    componentDidMount() {
        console.log("mounting...");
    }



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.props;
        return count === 0 ? "Zero" : count;
        
    }

}
 
export default counter;
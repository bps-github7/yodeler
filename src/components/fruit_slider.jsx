import React, { Component } from 'react';

String.prototype.titlecase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

export default class fruit_slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images : [
                {img : "https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/guava_small.jpg", name : "guava"},
                {img : "https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/grapes_small.jpg", name : "grapes"},
                {img : "https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/tangerine_small.gif", name : "tangerine"},
                {img : "https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/strawberries_small-e1426772485578.gif", name : "strawberries"},
                {img : "https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/grapefruit_samll.gif", name : "grapefruit"}
            ],
            index : 0
          }
    }
    
    fav = props => {
        if (props === "guava") {
            return(<strong>Second Favorite: </strong>);
        } else if (props === "grapefruit") {
            return(<strong>Favorite: </strong>);
        };
    }

    

    next = () => {
        if (this.state.index === 4) {
            return 0;
        }
        this.setState({
            index : this.state.index + 1
        });
    };

    previous = () => {
        if (this.state.index === 0 ) {
            return 0;
        };
        this.setState({
            index : this.state.index - 1
        });
    };

    render() { 
        return ( 
            <div className="App-image_slider">
                <h3>Favorite Fruits:</h3>
                { this.state.index != 0 ? <button onClick={this.previous}>-</button> : null }
                <img 
                style={{
                    height: 100,
                    width: 100,
                }}
                src={this.state.images[this.state.index]["img"]} alt={this.state.images[this.state.index]["name"]}/>
                <p>{this.fav(this.state.images[this.state.index]["name"])}{(this.state.images[this.state.index]["name"]).titlecase()}</p>
                { this.state.index != 4 ? <button onClick={this.next}>+</button> : null }
                
                
            </div>
        );
    }
}
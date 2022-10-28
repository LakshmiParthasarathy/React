import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
      super();
        this.state={
           cvar:0
        }
        this.changeState=this.changeState.bind(this)
    }

    changeState(){
        this.setState({
            cvar:this.state.cvar+1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.button} clicked {this.state.cvar} times</h1>
                <button type="button" onClick={this.changeState}> Counter Attempts</button>
            </div>
        );
    }
}

export default Counter;
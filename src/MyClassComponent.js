import React, { Component } from 'react';

class MyClassComponent extends Component {
    constructor(){
        super();
        this.state={
            id:'100',
            age:'32'
        }
        this.changeState=this.changeState.bind(this)
    }
    
    changeState(){
        this.setState({
            id:'111',
            age:'22'
        })
    }
    
    render() {
        return (
            <div>
                <h3> this is class component </h3>
                <h3> name is : {this.props.name}</h3>
                <h3>ID is :{this.state.id}</h3>
                <h3> AGE is :{this.state.age}</h3>
                <button onClick={this.changeState}> Change state</button>
            </div>
        );
    }
}

export  {MyClassComponent};//named export
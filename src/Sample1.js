import React, { Component } from 'react';

class Sample1 extends Component {
    constructor(){
        super();
   
    
        alert("hello");
    }

    componentDidMount()
    {
        alert("bye");
    }
    render() {
        return (
            <div>
                <h1>hi</h1>
            </div>
        );
    }
}

export default Sample1;
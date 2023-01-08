import React, { Component } from 'react';

class Simple extends React.Component
{
    top()
    {
    alert("top")
    }

render()
{
    return(
        
        <button type="button" onClick={this.top}>Click me!!</button>
        
    );
}
}


export default Simple; 

import React, { Component } from 'react';

class Name extends Component {
    constructor(){
        super();
        this.state={
         firstName:'',
         lastName:'',
         fullName:''
        }
        this.submit=this.submit.bind(this)
        this.firstDisplay=this.firstDisplay.bind(this)
        this.lastDisplay=this.lastDisplay.bind(this)
        }
   
        firstDisplay(e)
        {
            this.setState({
            firstName:e.target.value,
           
            
    
        })
    }
    lastDisplay(e)
    {
        this.setState({
        lastName:e.target.value,     

    })
}

submit()
{
  this.setState({
  fullName:this.state.firstName+this.state.lastName
  })
}

    render() {
        return (
            <div>
               
               FirstName:<input type="text" onChange={this.firstDisplay}/>
               LastName:<input type="text" onChange={this.lastDisplay}/> 
                <button type="button" onClick={this.submit}> submit</button>
                <p>Name:  {this.state.fullName}</p>
            </div>
        );
    }
}


export default Name;
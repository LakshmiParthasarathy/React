import React, { Component } from 'react';

class Name extends Component {
    constructor(){
        super();
        this.state={
         userName:'',
         passWord:'',
         dob:'',
         address:'',
         showName:false
        }
        this.submit=this.submit.bind(this)
        this.firstDisplay=this.firstDisplay.bind(this)
        this.lastDisplay=this.lastDisplay.bind(this)
        this.dob=this.dob.bind(this)
        this.address=this.address.bind(this)
        }
   
        firstDisplay(e)
        {
            this.setState({
            userName:e.target.value,
           
            
    
        })
      }
      lastDisplay(e)
     {
        this.setState({
        passWord:e.target.value,     

     })
     }

   dob(e)
  {
    this.setState({
    dob:e.target.value,
   
   })
  }

  address(e)
  {
    this.setState({
    address:e.target.value,
   
   })
  }

  submit()
  {
  this.setState({
  
  showName:true,
  })
 }

    render() {
        return (

            <form onSubmit={this.submit}>

                <h1> REGISTRATION FORM</h1>
               
               UserName:<input type="email" onChange={this.firstDisplay}/><br/><br/>
               Password:<input type="password" onChange={this.lastDisplay}/><br/><br/>
               DOB:<input type="text" onChange={this.dob}/><br/><br/>
               Address:<input type="text" onChange={this.address}/><br/><br/>
                <button type="button" onClick={this.submit}> Confirm </button>
                {this.state.showName && <p>"FirstName:" {this.state.userName}</p>}
                {this.state.showName && <p>"LastName:" {this.state.passWord}</p>}
                {this.state.showName && <p>"DOB:" {this.state.dob}</p>}
                {this.state.showName && <p>"Address:" {this.state.address}</p>}
            </form>
        );
    }
}


export default Name;
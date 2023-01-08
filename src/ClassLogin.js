import React, { Component } from 'react';

class ClassLogin extends Component {
    constructor(){
        super();
        this.state={
         userName:'',
         passWord:'',
        
        }

        this.submit=this.submit.bind(this)
       
        
        }


    submit()
    {
      

        if ((this.state.userName == 'lakshmi') && (this.state.passWord == 'abc123')) {
           
            alert("valid")
            
        } else {
            
            alert("invalid credentials");
        }


        
    }
  
  

    render() {
        return (

            <form onSubmit={this.submit}>

                <h1> Login Page </h1>
               
               UserName:<input type="text"  onChange={ e => this.setState({userName: e.target.value})} /><br/><br/>
               Password:<input type="text" onChange={ e => this.setState({passWord: e.target.value})} /><br/><br/>
              
                <button type="button" onClick={this.submit}> Sign In </button>
              
               
              
            </form>
        );
    }
}


export default ClassLogin;
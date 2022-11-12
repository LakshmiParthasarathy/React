import React, { Component } from 'react';
import styled from 'styled-components';

const DoP= styled.p`
background-color: Green;
color: lightblue;
font-size:32px;
`;

class Assign extends Component {
    constructor()
    {
        super();
        this.state=
        {
            insurance:0,
            mortgage:0,
            childcare:0,
            balAmount:0,
            grocery:0,
            budget:0

        }

        this.setAmount=this.setAmount.bind(this)
        
    }

    setAmount(e)
    {
      if(e.target.id=="ins")
      {
        this.setState({
            insurance:e.target.value,
        })

      }

      else if(e.target.id=="mor")
      {
        this.setState({
            mortgage:e.target.value,
        })
      }

      else if(e.target.id=="cc")
      {
        this.setState({
            childcare:e.target.value,
        })
      }

      else if(e.target.id=="gro")
      {
        this.setState({
            grocery:e.target.value,
        })
      }

      else if(e.target.id=="budget")
      {
        this.setState({
            budget:e.target.value,
        })
      }
    }

    render() {
      const bal = (parseInt(this.state.insurance)+parseInt(this.state.grocery)+parseInt(this.state.mortgage)+parseInt(this.state.childcare))-parseInt(this.state.budget)
        return (
            <div>
                Budget:<input type="number" onChange={this.setAmount} id="budget" /> <br/> <br/>
                Insurance:<input type="number" onChange={this.setAmount} id="ins"/>
                Mortgage:<input type="number" onChange={this.setAmount} id="mor"/> 
                Childcare:<input type="number" onChange={this.setAmount} id="cc"/>
                Grocery:<input type="number" onChange={this.setAmount} id="gro"/> 
                <DoP> Balance {bal}</DoP>
            </div>
        );
    }
}

export default Assign;
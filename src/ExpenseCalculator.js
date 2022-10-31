import React, { Component} from 'react';
const total=100;
const sum=' '
const mBalance=' '
//let[sum,mBalance]=React.useState();


class ExpenseCalculator extends Component {
   state=
        {
          childCare:' ',
          insurance:' ',
          mortage:' ',
          grocery:' ',
          mBalance:' ',
          
        }

       // this.calculate=this.calculate.bind(this)
        //this.display=this.display.bind(this)
    

     calculate(evt)
    {
      /*  const{name,value}=e.target
        this.setState({[name]:value})
        console.log(e.target.value)*/
        const value=evt.target.value;
        setState({
            ...state,
            [evt.target.name]:value
        });
    }
    /*{
        this.setState({
            
            childCare:parseInt(e.target.value),
            insurance:parseInt(e.target.value),
            mortage:parseInt(e.target.value),
            grocery:parseInt(e.target.value),
        })*/
        
    

    display=(e)=>
    {
        
       this.setState({
        sum:parseInt(this.state.childCare+this.state.insurance+this.state.mortage+this.state.grocery),
            mBalance:parseInt(this.state.total-this.state.sum)
            

    })
    
}
    render() {
        return (
            <div>
                Total Monthly Budget:<input type="text" value={total}/>
                Monthly Balance:<input type="text" onChange={this.display} value={this.state.mBalance}/><br/><br/>

                <p> Expenses: </p>

                Child Care: <input type="text" value={this.childCare} defaultValue=" " onChange={this.calculate}/> <br/>
                Insurance: <input type="text" value={this.insurance}onChange={this.calculate}/><br/>
                Mortage: <input type="text" value={this.mortage} onChange={this.calculate}/><br/>
                Grocery: <input type="text" value={this.grocery}onChange={this.calculate}/><br/>

            </div>
        );
    }
}

export default ExpenseCalculator;

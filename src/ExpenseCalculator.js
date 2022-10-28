import React, { Component} from 'react';
const total=100;
const sum=' '
const mBalance=' '
//let[sum,mBalance]=React.useState();


class ExpenseCalculator extends Component {
    constructor()
    {
        super();
        this.state=
        {
          childCare:' ',
          insurance:' ',
          mortage:' ',
          grocery:' ',
          mBalance:' ',
          
        }

        this.calculate=this.calculate.bind(this)
        this.display=this.display.bind(this)
    }

    calculate(e)
    {
        this.setState({
            
            childCare:parseInt(e.target.value),
            insurance:parseInt(e.target.value),
            mortage:parseInt(e.target.value),
            grocery:parseInt(e.target.value),
        })
        
    }

    display()
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

                Child Care: <input type="text" onClick={this.calculate}/> <br/>
                Insurance: <input type="text" onClick={this.calculate}/><br/>
                Mortage: <input type="text" onClick={this.calculate}/><br/>
                Grocery: <input type="text" onClick={this.calculate}/><br/>

            </div>
        );
    }
}

export default ExpenseCalculator;

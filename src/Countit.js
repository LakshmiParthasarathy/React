import React, { Component } from 'react';


class Countit extends Component {
  state = {
    num: 0,
    guess:' '
  };

  plus = () => {
    if(this.state.guess>10){
    this.setState((state) => ({ num: state.num + 1 })
    );
    alert("correct")
    }
    else{
          //alert(this.state.num)
        //alert("entered right")
        alert("wrong")

    }
  };


  render() {
    return (
      <div className="counter">
        <div className="counter-box">
          <h1 className="title">Let's count!</h1>
          Number: <input type="text" value={this.state.guess} onChange={this.plus()}/>
          <div className="num">{this.state.num}</div>
          <div className="buttons">
            <button onClick={this.plus}>+</button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Countit;
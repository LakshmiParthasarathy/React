import React, { Component } from 'react';

class Checkbox extends Component {
     constructor(props)
     {
      super(props);
      this.state={
        food:{
        Music:false,
        Travel:false,
        Reading:false
        }
      }
      this.handleChange=this.handleChange.bind(this)
     }

     handleChange=event=>{
      let exam=this.state;
      exam.food[event.target.value]=event.target.checked;
      this.setState(exam);
      var res=event.target.value
      console.log(res)
     }

  render() {
    return (
      <div>
         Music
      <input
        type="checkbox"
        id="pizza"
        name="food"
        value="Music"
        onChange={event =>this.handleChange(event)}
        checked={this.state.food.Pizza}/>
        

        Travel
      <input
        type="checkbox"
        id="Pasta"
        name="food"
        value="Travel"
        onChange={event =>this.handleChange(event)}
        checked={this.state.food.Pasta}/>

       Reading
      <input
        type="checkbox"
        id="lasangna"
        name="food"
        value="Reading"
        onChange={event => this.handleChange(event)}
        checked={this.state.food.Lasangna}/>

        <div> What is the choice?:{}</div>

      </div>
    );
  }
}

export default Checkbox;
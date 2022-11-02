import React, { Component } from 'react';

class Radioexample extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        
      }

      onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }
    
    render() {
        return (
          
            <form>
        <div className="radio">
          <label>
            <input type="radio" value="Red" checked={this.state.selectedOption === "Red"}onChange={this.onValueChange}/>
            Red
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"value="Green"checked={this.state.selectedOption === "Green"}onChange={this.onValueChange}/>
            Green
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Blue"checked={this.state.selectedOption === "Blue"}onChange={this.onValueChange}/>
            Blue
          </label>
        </div>
        <div>
          Favourite color  is : {this.state.selectedOption}
        </div>   
      </form>
        );
    }
}

export default Radioexample;
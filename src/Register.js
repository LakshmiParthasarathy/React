import React, { Component } from 'react';

class Register extends Component {
  state = {
    firstName: '',
    showName: false,
    lastName:'',
    showLast:false,

  }

  displayNameHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ firstName: updatedName });
    let lastUpdate=e.target.value;
    this.setState({lastName: lastUpdate});
    //console.log(updatedName);  
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showName: true,
      showLast:true
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter the Name</label>
          <input type="text" name="firstName" onChange={this.displayNameHandler} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={this.displayNameHandler} value={this.state.lastName} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
          {this.state.showName && <p>"FirstName: " {this.state.firstName}</p>}
          {this.state.showLast && <p>"LastName: " {this.state.lastName}</p>}
        </form>
      </div>
    );
  }
}
  export default Register;
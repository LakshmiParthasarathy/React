import React, {useState}from "react";


export default  function Form() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    display:null
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        display
        <input
          type="text"
          name="display"
          value={state.firstName+state.lastName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}






import React, {useState}from "react";
const total=100

export default  function Form() {
  const [state, setState] = React.useState({
    grocery: "",
    childCare: "",
    mortgage:" ",
    insurance:" ",
    totalSum:0,
    mBalance:0,
    
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
      
      <label>   Total Monthly Budget:<input type="text" value={total}/> </label>
        <label>      Monthly Balance:<input type="text" onChange={handleChange} value={state.total-state.childCare}/><br/><br/></label>

                <p> Expenses: </p>

               <label> Child Care: <input type="text" value={state.childCare} onChange={handleChange}/> <br/> </label>
               <label>Insurance: <input type="text" value={state.insurance} onChange={handleChange}/><br/> </label>
               <label>Mortage: <input type="text" value={state.mortgage} onChange={handleChange}/><br/></label>
               <label>Grocery: <input type="text" value={state.grocery} onChange={handleChange}/><br/></label>
      
    </form>
  );
}





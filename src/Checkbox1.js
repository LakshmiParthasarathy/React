import React from 'react';
import { useState } from 'react';

function ReactCheckboxAssign(props) {
  
    const [hobby, setHobbies] =useState([]); // creating an empty array to store the value
    const handleChange = (e)=>{
        const {value, checked} =e.target;
        if (checked) {
            setHobbies(previousState  => [...previousState , value]);
          } else {
            setHobbies(previousState  => previousState .filter(x => x !== value));
          }
    }

    return (
        <div>
             <h2>My Hobbies are:</h2>
             <input
              type="checkbox"
              value="Sports"
              onChange={handleChange}
            /> Sports 
            <input
              type="checkbox"
              value="Travel"
              onChange={handleChange}
            /> Travel
            <input
              type="checkbox"
              value="Music"
              onChange={handleChange}
            /> Music
       
               
      <div>My hobbies are: {hobby.length ? hobby.join(', ') : null}</div>
   
        </div>
    );
}

export default ReactCheckboxAssign;
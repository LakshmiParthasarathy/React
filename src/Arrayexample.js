import React,{useState} from 'react';

function Arrayexample(props) {
    const [car, setColor] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: " "
      });

   
    return (
        <div>
        <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year} in {car.color} color
      </p>
      
      <button onClick={(e)=>{
                setColor(previousstate=>{return {...previousstate,color:e.target.innerHTML}})
            }
        }>red</button>
        <button onClick={(e)=>{
                setColor(previousstate=>{return {...previousstate,color:e.target.innerHTML}})
            }
        }>blue</button>
        <button onClick={(e)=>{
                setColor(previousstate=>{return {...previousstate,color:e.target.innerHTML}})
            }
        }>yellow</button>
        </div>
    );
}

export default Arrayexample;
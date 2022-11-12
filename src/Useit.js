import React, { useEffect, useState, useRef} from 'react';

export default function Useit(props) {

    const[count,setCount]=useState(0)
    const[calculate,setCalculate]=useState(0)
    const[value,setValue]=useState(1)

    useEffect( ()=>{
        setCalculate(()=>count*2+value)
    },[value])

    return (
        <div>
            <h3>{count}</h3>
        <button onClick={()=>setCount((val)=>val+1)}> Add </button><br/> <br/>
        
        <h3> Calculation: {calculate}</h3>
        <button onClick={()=>setCount((val)=>val+1)}> Change </button>
        <h3> Calculation: {calculate}</h3>

        </div>
    );
}


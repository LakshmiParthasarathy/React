import React, { useEffect, useState, useRef} from 'react';

function Userefexam(props) {
    const[input,setInput]=useState(" ");
    const count =useRef(" ");

    useEffect(()=>{
        count.current=count.current+1
    },[input])
    return (
        <div>
            <input type={"text"}
            value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <h1>rendered {input} times</h1>
            <h2> Previous {count.current}</h2>
        </div>
    );
}

export default Userefexam;
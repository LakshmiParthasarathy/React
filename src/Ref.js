import React,{useState,useEffect,useRef} from 'react';

function Ref(props) {

    const[input,setInput]=useState(" ");
    const count =useRef(0);

    useEffect(()=>{
        count.current=count.current+1
    })
    return (
        <div>
            <input type={"text"}
            value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <h1>rendered {count.current} times</h1>
        </div>
    );
}

export default Ref;
import React, {useState} from 'react';

function Useexample(props) {
    const[color,setColor]=useState( )
    //const[sports,setSports]=useState("football")
    return (
        <div>
            <h2> My Fav color : {color}</h2>
            <button onClick={(e)=>{
                setColor(e.target.innerHTML)
            }
        }>red</button>
        <button onClick={(e)=>{
                setColor(e.target.innerHTML)
            }
        }>blue</button>
        <button onClick={(e)=>{
                setColor(e.target.innerHTML)
            }
        }>yellow</button>
        </div>
    );
}

export default Useexample;
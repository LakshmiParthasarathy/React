
import React,{useState} from 'react';

const CounterHOC=(WrappedComponent) =>{

function CounterHOC(props) {
    const[count,setCount]=useState(0)
    function increment()
    {
    setCount(count+1)

    }
    return (
        <div>
            <WrappedComponent count={count} increment={increment}/>
        </div>
    );
}
return CounterHOC;
}

export default CounterHOC;
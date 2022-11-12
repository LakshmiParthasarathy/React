import React from 'react';
import CounterHOC from './CounterHOC';

function CompB(props) {
    const{count,increment}=props;
   
    return (
        <div>
            <button onMouseOver={increment}>B{count} over</button>
        </div>
    );
}

export default CounterHOC(CompB);
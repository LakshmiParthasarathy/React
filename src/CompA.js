import React from 'react';
import CounterHOC from './CounterHOC';

function CompA(props) {
    const{count,increment}=props;
    
    return (
        <div>
            <button onClick={increment}>A {count} click</button>
        </div>
    );
}

export default CounterHOC(CompA);
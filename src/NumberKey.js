import React from 'react';

function NumberKey(props) {
    const numbers=props.number;
    const numberList=numbers.length
    ?

    numbers.map((num)=>{
       return  <li key={num.toString()}>{num}</li>
    })
    :
    'No record'
    return (
        <ul>
            
                {numberList}
            
        </ul>
    );
}

export default NumberKey;
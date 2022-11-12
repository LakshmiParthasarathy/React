import React from 'react';

function Arrayit(props) {
    const names=props.data;
    const nameList=names.length
    ?

    names.map((name)=>{
       return  <li key={name.id}>{name.id}:{name.name}:{name.age}</li>
    })
    :
    'No record'
    return (
        <ul>
            
                {nameList}
            
        </ul>
    );
}

export default Arrayit;
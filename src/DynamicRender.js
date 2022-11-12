import React, { useState } from 'react';
import DynamicComp from './DynamicComp';

function DynamicRender(props) {
    const[user,setUser]=useState('usera')
    return (
        <div>
            <DynamicComp component ={user}/>
              <button onClick={()=>setUser('usera')}>switch to user a</button>
              <button onClick={()=>setUser('userb')}>switch to user b</button>
            
        </div>
    );
}

export default DynamicRender;
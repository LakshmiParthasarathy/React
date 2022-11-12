import React,{useContext} from 'react';
import {UserContext} from  './Component';
import './testStyle.modules.css'


function Component3() {
    const user=useContext(UserContext)
    return (
        <div>
            <p className='bigText'> It's Component3</p>
           <h3> Hello {user}</h3>     
       </div>
    );
}

export default Component3;
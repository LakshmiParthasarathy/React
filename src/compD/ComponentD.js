import React from 'react';
import {useNavigate} from 'react-router-dom'
function ComponentD(props) {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Comp D</h1>
            <button onClick={()=>navigate('/compB')}>go to B</button>
        </div>
    );
}

export default ComponentD;

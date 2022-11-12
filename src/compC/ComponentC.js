import React from 'react';
import { useNavigate } from 'react-router-dom';
function ComponentC(props) {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Hi From Component C</h1>
            <button onClick={()=>navigate('/compA')}>Go to A</button>
        </div>
    );
}

export default ComponentC;

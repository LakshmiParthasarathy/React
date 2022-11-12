import React from 'react';
import Bottomrender from './Bottomrender';

function Middlerender(props) {
    console.log("Middle Render")
    return (
        <div>
            <Bottomrender/>
        </div>
    );
}

export default Middlerender;
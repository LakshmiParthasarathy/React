import React from 'react';
import Middlerender from './Middlerender';

function Toprender(props) {

    console.log("Top Render");
    return (
        <div>
           <Middlerender/> 
        </div>
    );
}

export default Toprender;
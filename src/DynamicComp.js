import React from 'react';
import UserA from './UserA';
import UserB from './UserB';

function DynamicComp(props) {
    const user={
        usera:UserA,
        userb:UserB
    }

    const SelectUser=user[props.component]
    return (
       <SelectUser/>
    );
}

export default DynamicComp;
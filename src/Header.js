import React from 'react';
import {styles} from './styles';

function Header(props) {

    const myStyle={
        color: 'blue',
        texttransform:'capitalize'
    }
    return (
        <div>
            <h3 style={myStyle}>Course name: {props.course}</h3>
            <h4 style={styles.HeaderStyle}> Duration: {props.duration}</h4>
        </div>
    );
}

export default Header;


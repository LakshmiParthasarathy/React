import React from 'react';

function Header(props) {
    return (
        <div>
            <h3>Course name: {props.course}</h3>
            <h4> Duration: {props.duration}</h4>
        </div>
    );
}

export default Header;


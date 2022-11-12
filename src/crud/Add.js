import React, { useState } from 'react';
import Employees from './Employees';
import uuid from 'react-uuid';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Add(props) {
    const[name, setName] = useState(' ');
    const[age, setAge] = useState(' ');
    let navigate = useNavigate();
    const handleClick = (e)=>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        Employees.push({id: uniqueId, name:name, age: age});
        navigate('/')
    }
    return (
        <div>
            <form>
                <input type ="text" placeholder='Enter Name' 
                onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <input type ="text" placeholder='Enter Age' 
                onChange={(e)=>setAge(e.target.value)}/><br/><br/>
                <Button variant="success" onClick={(e)=>handleClick(e)} type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default Add;
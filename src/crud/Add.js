import React, { useInsertionEffect, useState } from 'react';
import axios from 'axios';
//import Employees from './Employees';
import uuid from 'react-uuid';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Add(props) {
    const[name, setName] = useState(' ');
    const[users, setUsers] = useState({
        userName:"",
        userSal:""
    });
        
    let navigate = useNavigate();
    const handleClick = (e)=>{
        e.preventDefault();
        //console.log(name);
        //setUsers(prev => ({...prev, pass: name}))
        
       // const ids = uuid();
        //let uniqueId = ids.slice(0,8);
       // Employees.push({id: uniqueId, name:name, age: age});
       axios.post('http://localhost:8083/addUser', users)
       navigate('/')
    }
    return (
        <div>
            <form>
                <input type ="text" placeholder='Enter Name' 
                onChange={(e)=>setUsers(prev=>({...prev, userName:e.target.value}))}/><br/><br/>
                <input type ="text" placeholder='Enter Salary' 
                onChange={(e)=>setUsers(prev=>({...prev, userSal:e.target.value}))}/><br/><br/>
                <button onClick={(e)=>handleClick(e)} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Add;

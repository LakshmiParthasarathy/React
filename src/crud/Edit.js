import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employees from './Employees';
import { Button } from 'react-bootstrap';

function Edit(props) {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[id, setId] = useState('');
    let navigate = useNavigate();
    var index = Employees.findIndex(element => element.id == id)
    const handleClick = (e) => {
        e.preventDefault();
        let emp = Employees[index];
        emp.name = name;
        emp.age = age;
        navigate('/')
    }
    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setId(localStorage.getItem('id'));

    },[])
    return (
        <div>
             <form>
                <input type ="text" placeholder='Enter Name' value = {name}
                onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <input type ="text" placeholder='Enter Age' value = {age} 
                onChange={(e)=>setAge(e.target.value)}/><br/><br/>
                <Button variant="success" onClick={(e)=>handleClick(e)} type="submit">Update</Button>
            </form>
        </div>
    );
}

export default Edit;

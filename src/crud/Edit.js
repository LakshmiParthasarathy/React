import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employees from './Employees';
import axios from 'axios';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
function Edit(props) {

    const[name, setName] = useState('');
    const[sal, setSal] = useState('');
    const[id, setId] = useState('');


    const[user, setUser] = useState({
        userName:"",
        userSal:""
    })
    let navigate = useNavigate();
   // var index = Employees.findIndex(element => element.id == id)
    const handleClick = (e) => {
        e.preventDefault();
       // let emp = Employees[index];
        //emp.name = name;
        //emp.age = age;
        axios.put('http://localhost:8083/user/'+id, user)
        navigate('/')
    }
    useEffect(()=>{
        console.log('UseEffect Called')
        setName(localStorage.getItem('name'));
        //setAge(localStorage.getItem('age'));
        setId(localStorage.getItem('id'));
        setSal(localStorage.getItem('sal'));

    },[])
    return (
        <div>
             <form>
                <input type ="text" placeholder='enter name'
                onChange={(e)=>setUser(prev=>({...prev, userName:e.target.value}))} /><br/><br/>
                <input type ="text" placeholder='enter salary'
                onChange={(e)=>setUser(prev=>({...prev, userSal:e.target.value}))} /><br/><br/>
                <button onClick={(e)=>handleClick(e)} type="submit">Update</button>
            </form>
        </div>
    );
}

export default Edit;

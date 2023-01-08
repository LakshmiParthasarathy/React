import React from 'react';
//import Employees from './Employees';
import {useNavigate, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EmpDetails(props) {

    const [ Employees, setEmployee ] = useState([]);
    const[user, setUser] = useState({
        userName:"",
        userSal:""
    })

    useEffect(() => {
        function getData() {
          fetch('http://localhost:8083/getUsers')
            .then(res => res.json())
            .then(data => setEmployee(data))
            .catch(err => console.log(err));
        }
        getData();
      }, []);

    let navigate = useNavigate();

     
    console.log(Employees);

    const handleEdit = ((id, name, sal) =>{
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('sal', sal)
    })
    const handleDelete = ((id)=>{
          // var index = Employees.map(e=>e.id).indexOf(id)
          var index = Employees.findIndex(el => el.id == id)
           Employees.splice(index, 1)
           axios.delete('http://localhost:8083/user/'+  id)
           navigate('/')
    })
/*
    function getData(){
        const apiUrl = 'http://localhost:8081/getUsers'
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => data)
        .catch(err=>console.log(err))
    }*/
    return (
        <div>
            <table className = 'center' border={1}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        Employees.length > 0
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr key={item.userId}>
                                    <td>{item.userId}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.userSal}</td>

                                    <td>
                                        <Link to = '/edit'>
                                             <button onClick={()=>handleEdit(item.userId, item.userName)}>Edit</button>
                                        </Link>   
                                        &nbsp;  
                                        <button onClick={()=>handleDelete(item.userId)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'No Data Found'
                    }
                </tbody>
            </table>
            <br/>
            <Link to = '/create'>
                 <button>Add</button>
            </Link> 
            &nbsp;
            <Link to = '/search'>
                 <button>Search</button>
            </Link> 
            <br/>
           
        </div>
    );
}

export default EmpDetails;

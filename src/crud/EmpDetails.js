import React from 'react';
import Employees from './Employees';
import {useNavigate, Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function EmpDetails(props) {

    let navigate = useNavigate();

    const handleEdit = ((id, name, age) =>{
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age)
    })
    const handleDelete = ((id)=>{
           var index = Employees.map(e=>e.id).indexOf(id)
           Employees.splice(index, 1)
           navigate('/')
    })
    return (
        <div>
           
            <h1 style={{ color: 'blue' }}> <u>CRUD Operations</u> </h1> <br/>
            <Table className='center' border={1} striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        Employees.length > 0
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <Link to = '/edit'>
                                             <Button variant="link" onClick={()=>handleEdit(item.id, item.name, item.age)}>Edit</Button>
                                        </Link>   
                                        &nbsp;  
                                       
                                        <button  className="btn btn-danger btn-xs" onClick={()=>handleDelete(item.id)}>x</button>
                                        
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'No Data Found'
                    }
                </tbody>
            </Table>
            <br/>
            <Link to = '/create'>
            <Button variant="success"> Add </Button>
            </Link>     
        </div>
    );
}

export default EmpDetails;

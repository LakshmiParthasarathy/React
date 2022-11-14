import React, { useState } from 'react';

function FetchData(props) {
    const[data, setData] = useState([])
    
    function getData(){
        const apiUrl = 'https://gorest.co.in/public/v2/users'
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setData(data))
        
    }
    return (
        <div>
            <button onClick={getData}>Get Data from API</button><br/><br/>
            <table className = 'center' border={1}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0
                        ?
                        data.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.status}</td>
                                   
                                </tr>
                            )
                        })
                        :
                        'No Data Found'
                    }
                </tbody>
            </table>
        </div>
    );
}

export default FetchData;

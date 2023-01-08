import React, { useState } from 'react';

function FetchData(props) {
    const[data, setData] = useState([])
    
    function getData(){
        //const apiUrl = 'https://gorest.co.in/public/v2/users'
        const apiUrl='http://localhost:8083/getUsers'
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
                 
                  </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0
                        ?
                        data.map((item)=>{
                            return(
                                <tr key={item.userId}>
                                    <td>{item.userId}</td>
                                    <td>{item.userName}</td>
                                   
                                   
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

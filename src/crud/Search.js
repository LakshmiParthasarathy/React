import React, {useState} from 'react';
import axios from 'axios';

function Search(props) {
    const[users, setUsers] = useState({
        userId: "",
        userName:"",
        userSal:""
    });
    
    const[id, setId] = useState("");

    const handleClick = (e)=>{
        e.preventDefault();
        axios.get('http://localhost:8083/user/'+id)
       .then(response => setUsers(response.data))
               
    }
    return (
        <div>
        <form>
           <input type ="text" placeholder='Search id'
           //onChange={(e)=>setUser(prev=>({...prev, userName:e.target.value}))} /><br/><br/>
           onChange={(e)=> setId(e.target.value)} 
           /><br/><br/>
           <button onClick={(e)=>handleClick(e)} type="submit">Search</button>
           <h1>UserName: {users.userName}, UserDept: {users.userSal}</h1>
           
        </form>
    
   </div>
    );
}

export default Search;

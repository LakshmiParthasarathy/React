import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Users from './Users';


function FuncLogic()
{

const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
let navigate = useNavigate();

const checkEmail = (e) => {
    setEmailValue(e.target.value);
}

const checkPwd = (e) => {
    setPasswordValue(e.target.value);
}

const Submit = (e) => {
    e.preventDefault();
    let values = {
        email: 'Admin',
        password: 'abc123'
    }

    if ((emailValue == values.email) && (passwordValue == values.password)) 
    {
        navigate('/admin')
    } else 
    {
        navigate('/users')
    }

    
}

return (
    <div>
        <h2>Login Page</h2>
        <form>
            
                <input
                
                placeholder="Enter email"
                value={emailValue}
                onChange={checkEmail}
                />
           
             <br/><br/>
                <input
                type="password"
                
                placeholder="Password"
                value={passwordValue}
                onChange={checkPwd}
                />

                <br/><br/>

                <Link to = '/admin'>
                <button onClick={Submit}> Login</button>
                </Link>  
                &nbsp; 

              
            
      </form>
    </div>
  );

}

  export default FuncLogic;
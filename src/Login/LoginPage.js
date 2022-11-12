import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function LoginPage(props) {
    const[user,setUser]=useState({
        userName:'',
        passWord:''
    })
        let navigate=useNavigate();

        const signIn=()=>{
            if(user.userName=='lak' && user.passWord=='123')
            {
              navigate('/success')
            }else
            {
              navigate('/failure')
            }
        }
    return (
        <div>
            UserName:
            <input type="text"
            onChange={(e)=>{
                setUser(previousState=>{
                    return{...previousState,userName:e.target.value}
                })
            }}/>

            <br/>

            Password:
            <input type="text"
            onChange={(e)=>{
                setUser(previousState=>{
                    return{...previousState,passWord:e.target.value}
                })
            }}/>

            <br/>
            <button onClick={signIn}>Sign In</button>
            
        </div>
    );
}

export default LoginPage;
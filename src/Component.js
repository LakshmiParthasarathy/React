import React, { useState,createContext,useContext } from 'react';
import Component1 from './Component1';

export const UserContext=createContext();

function Component(props) {
    const[user,setUser]=useState("Lakshmi")
    return (
        <UserContext.Provider value={user}>
                        <h2>Hello {user}</h2>
            <Component1 user={user}/>
            </UserContext.Provider>
        
    );
}

export default Component;
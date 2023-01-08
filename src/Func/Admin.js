import React from 'react';
import { Router,Route,Link, BrowserRouter } from 'react-router-dom';
import ReactClass from './ReactClass';



 function Admin() {
   

    return (
        <div>

        <h1> Welcome to the page to add courses!!</h1>

        
        
        <Link to="/react">
         React 
        </Link> <br/> <br/>
        <Link to="/js">
         JavaScript 
        </Link> <br/> <br/>
        <Link to="/java">
        Java  
        </Link> <br/> <br/>
        <Link to="/sql">
         SQL 
         </Link>        
            
        </div>
    );
}

export default Admin;


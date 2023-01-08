import React from 'react';
import Admin from './Admin';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import ReactClass from './ReactClass';
import JavaScriptClass from './JavaScriptClass';
import SQLClass from './SQLClass';
import JavaClass from './JavaClass';


function MainPage(props) {
    return (
        <div>
            
           <BrowserRouter>
        <Router>
            <Routes>
        <Route path="/react" component={ReactClass} />
        <Route path="/js" component={JavaScriptClass} />
        <Route path="/java" component={SQLClass} />
        <Route path="/sql" component={JavaClass} />
        </Routes>
      </Router>
      </BrowserRouter> 
    
            
        </div>
    );
}

export default MainPage;
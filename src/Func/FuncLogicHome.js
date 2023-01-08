import React from 'react';
import Admin from './Admin';
import Users from './Users';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FuncLogic from './FuncLogic';

function FuncLogicHome(props) {
    return (
        <div>
             <Router>
                <Routes>
                    <Route path = '/' element={<FuncLogic />} />
                    <Route path = '/admin' element={<Admin/>} />
                    <Route path = '/users' element={<Users/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default FuncLogicHome;

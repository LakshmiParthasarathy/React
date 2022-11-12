import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Failure from './Failure';
import LoginPage from './LoginPage';
import Pass from './Pass';

function Index(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/success' element={<Pass/>}/>
                    <Route path='/failure' element={<Failure/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Index;
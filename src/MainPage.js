import React from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import ComponentA from './compA/ComponentA';
import ComponentB from './compB/ComponentB';
import ComponentC from './compC/ComponentC';
import ComponentD from './compD/ComponentD';
function MainPage(props) {
    return (
        <div>
            <h2>React Router Demo</h2>
            <BrowserRouter>
                <nav>
                    <li><Link to="/compA">ComponentA</Link></li>
                    <li><Link to="/compB">ComponentB</Link></li>
                    <li><Link to="/compC">ComponentC</Link></li>
                    <li><Link to="/compD">ComponentD</Link></li>
                </nav>
                <Routes>
                    <Route path='/compA' element={<ComponentA/>}/>
                    <Route path='/compB' element={<ComponentB/>}/>
                    <Route path='/compC' element={<ComponentC/>}/>
                    <Route path='/compD' element={<ComponentD/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainPage;

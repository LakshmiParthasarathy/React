import React from 'react';
import EmpDetails from './EmpDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
function Home(props) {
    return (
        <div>
             <Router>
                <Routes>
                    <Route path = '/lakshmi-react-code' element={<EmpDetails />} />
                    <Route path = '/create' element={<Add />} />
                    <Route path = '/edit' element={<Edit />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Home;

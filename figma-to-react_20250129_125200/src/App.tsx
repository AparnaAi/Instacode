import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import Homepage from './components/Homepage';
import Login from './components/Login';

    const App: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
            <Route path="/" element={<Navigate to="/Homepage" replace />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;
    
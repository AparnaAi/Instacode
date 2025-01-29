import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import Login from './components/Login';

    const App: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;
    
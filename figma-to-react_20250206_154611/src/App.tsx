import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import Loginuser from './components/Loginuser';

    const App: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
            <Route path="/" element={<Navigate to="/Loginuser" replace />} />
        <Route path="/Loginuser" element={<Loginuser />} />
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;
    
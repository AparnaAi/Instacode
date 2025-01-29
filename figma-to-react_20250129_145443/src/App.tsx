import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import FindADoctorPage from './components/FindADoctorPage';
import Formdr from './components/Formdr';
import FormdrGeneralPhy from './components/FormdrGeneralPhy';
import GeneralPhysician from './components/GeneralPhysician';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Popup from './components/Popup';

    const App: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
            <Route path="/" element={<Navigate to="/FindADoctorPage" replace />} />
        <Route path="/FindADoctorPage" element={<FindADoctorPage />} />
        <Route path="/Formdr" element={<Formdr />} />
        <Route path="/FormdrGeneralPhy" element={<FormdrGeneralPhy />} />
        <Route path="/GeneralPhysician" element={<GeneralPhysician />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Popup" element={<Popup />} />
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;
    
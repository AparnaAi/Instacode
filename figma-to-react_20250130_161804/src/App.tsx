
            import React from 'react';
            import GeneralPhysician from './components/GeneralPhysician.tsx';
            import FindADoctorPage from './components/FindADoctorPage';
import Formdr from './components/Formdr';
import FormdrGeneralPhy from './components/FormdrGeneralPhy';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Popup from './components/Popup';
            import './App.css';

            const App: React.FC = () => {
                return (
                    <div className="App">
                        <GeneralPhysician />
                        <FindADoctorPage />
<Formdr />
<FormdrGeneralPhy />
<Homepage />
<Login />
<Popup />
                    </div>
                );
            };

            export default App;
            
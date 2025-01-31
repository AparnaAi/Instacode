// Import the React library to use JSX and create components
import React from 'react';

// Import necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import custom components for different pages of the application
import FindADoctorPage from './components/FindADoctorPage';
import Formdr from './components/Formdr';
import FormdrGeneralPhy from './components/FormdrGeneralPhy';
import GeneralPhysician from './components/GeneralPhysician';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Popup from './components/Popup';

// Define the main App component as a functional component
const App: React.FC = () => {
    // Return the JSX to render the component
    return (
        // Set up the router to manage navigation within the app
        <BrowserRouter>
            {/* Define the routes for the application */}
            <Routes>
                {/* Redirect from the root path to the Login page */}
                <Route path="/" element={<Navigate to="/Login" replace />} />
                {/* Define a route for the FindADoctorPage component */}
                <Route path="/FindADoctorPage" element={<FindADoctorPage />} />
                {/* Define a route for the Formdr component */}
                <Route path="/Formdr" element={<Formdr />} />
                {/* Define a route for the FormdrGeneralPhy component */}
                <Route path="/FormdrGeneralPhy" element={<FormdrGeneralPhy />} />
                {/* Define a route for the GeneralPhysician component */}
                <Route path="/GeneralPhysician" element={<GeneralPhysician />} />
                {/* Define a route for the Homepage component */}
                <Route path="/Homepage" element={<Homepage />} />
                {/* Define a route for the Login component */}
                <Route path="/Login" element={<Login />} />
                {/* Define a route for the Popup component */}
                <Route path="/Popup" element={<Popup />} />
            </Routes>
        </BrowserRouter>
    );
};

// Export the App component as the default export
export default App;
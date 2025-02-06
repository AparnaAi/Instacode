// Import React library
import React from 'react';
// Import necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Import Account_Management component
import Account_Management from './components/Account_Management';
// Import Adduser component
import Adduser from './components/Adduser';
// Import BillPay component
import BillPay from './components/BillPay';
// Import Card_Management component
import Card_Management from './components/Card_Management';
// Import Deleteuser component
import Deleteuser from './components/Deleteuser';
// Import Frame2 component
import Frame2 from './components/Frame2';
// Import Frame3 component
import Frame3 from './components/Frame3';
// Import Listuser component
import Listuser from './components/Listuser';
// Import Loginuser component
import Loginuser from './components/Loginuser';
// Import Report component
import Report from './components/Report';
// Import Transaction component
import Transaction from './components/Transaction';
// Import Updateuser component
import Updateuser from './components/Updateuser';

// Define the main App component as a functional component
const App: React.FC = () => {
    return (
        // Set up BrowserRouter for handling routing
        <BrowserRouter>
            <Routes>
                // Redirect root path to Account_Management
                <Route path="/" element={<Navigate to="/Account_Management" replace />} />
                // Route for Account_Management component
                <Route path="/Account_Management" element={<Account_Management />} />
                // Route for Adduser component
                <Route path="/Adduser" element={<Adduser />} />
                // Route for BillPay component
                <Route path="/BillPay" element={<BillPay />} />
                // Route for Card_Management component
                <Route path="/Card_Management" element={<Card_Management />} />
                // Route for Deleteuser component
                <Route path="/Deleteuser" element={<Deleteuser />} />
                // Route for Frame2 component
                <Route path="/Frame2" element={<Frame2 />} />
                // Route for Frame3 component
                <Route path="/Frame3" element={<Frame3 />} />
                // Route for Listuser component
                <Route path="/Listuser" element={<Listuser />} />
                // Route for Loginuser component
                <Route path="/Loginuser" element={<Loginuser />} />
                // Route for Report component
                <Route path="/Report" element={<Report />} />
                // Route for Transaction component
                <Route path="/Transaction" element={<Transaction />} />
                // Route for Updateuser component
                <Route path="/Updateuser" element={<Updateuser />} />
            </Routes>
        </BrowserRouter>
    );
};

// Export the App component as the default export
export default App;
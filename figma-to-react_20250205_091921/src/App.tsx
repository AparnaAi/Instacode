import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import Account_Management from './components/Account_Management';
import Adduser from './components/Adduser';
import BillPay from './components/BillPay';
import Card_Management from './components/Card_Management';
import Deleteuser from './components/Deleteuser';
import Frame2 from './components/Frame2';
import Frame3 from './components/Frame3';
import Listuser from './components/Listuser';
import Loginuser from './components/Loginuser';
import Report from './components/Report';
import Transaction from './components/Transaction';
import Updateuser from './components/Updateuser';

    const App: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
            <Route path="/" element={<Navigate to="/Account_Management" replace />} />
        <Route path="/Account_Management" element={<Account_Management />} />
        <Route path="/Adduser" element={<Adduser />} />
        <Route path="/BillPay" element={<BillPay />} />
        <Route path="/Card_Management" element={<Card_Management />} />
        <Route path="/Deleteuser" element={<Deleteuser />} />
        <Route path="/Frame2" element={<Frame2 />} />
        <Route path="/Frame3" element={<Frame3 />} />
        <Route path="/Listuser" element={<Listuser />} />
        <Route path="/Loginuser" element={<Loginuser />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Updateuser" element={<Updateuser />} />
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;
    
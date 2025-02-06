import { React, useState, useEffect } from 'react';
import styles from '../styles/BillPay.module.css';
import { useNavigate } from 'react-router-dom';
import a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2_jpg from '../assets/a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2.jpg';
import a_4005ebe9033ad300378b00576e9bce5f794c8dfe_jpg from '../assets/a_4005ebe9033ad300378b00576e9bce5f794c8dfe.jpg';
import a_322fc3889a9ffb9988f181411fab01ed6a41a168_jpg from '../assets/a_322fc3889a9ffb9988f181411fab01ed6a41a168.jpg';
import a_c62ca26362db98409a8cf475434c9a430082622d_jpg from '../assets/a_c62ca26362db98409a8cf475434c9a430082622d.jpg';
import a_facd96e3bd2ddf468f1e8bc055e4387d281e3be1_jpg from '../assets/a_facd96e3bd2ddf468f1e8bc055e4387d281e3be1.jpg';
import a_e88f7f691f921dc7591ea89e296a79d3ffd83696_jpg from '../assets/a_e88f7f691f921dc7591ea89e296a79d3ffd83696.jpg';
import a_b2658dfc9799b15bdd78726d50b19411c22557b4_jpg from '../assets/a_b2658dfc9799b15bdd78726d50b19411c22557b4.jpg';
import a_430412e86a51ebcd66abc1c2f02092ac6a645960_jpg from '../assets/a_430412e86a51ebcd66abc1c2f02092ac6a645960.jpg';
import a_b561c28c4ff2b562d8c96e024843eb0a87a78041_jpg from '../assets/a_b561c28c4ff2b562d8c96e024843eb0a87a78041.jpg';

const BillPay: React.FC = () => {
    const navigate = useNavigate();
    // Form state
    const [formData, setFormData] = useState({
        amount: '$250.00',
        type: 'One-Time',
        recipient: 'John Doe',
        date: '2025-01-12'
    });

    // Validation state
    const [errors, setErrors] = useState({
        amount: '',
        type: '',
        recipient: '',
        date: ''
    });

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    // Custom validation functions
    const validateAmount = (amount: string): string => {
        if (!amount) return 'Amount is required';
        if (!amount.match(/^\$\d+(\.\d{2})?$/)) {
            return 'Please enter a valid amount format (e.g. $250.00)';
        }
        return '';
    };

    const validateRequired = (value: string, fieldName: string): string => {
        return value ? '' : `${fieldName} is required`;
    };

    // Handle form submission
    const handlePayment = (event: React.FormEvent) => {
        event.preventDefault();

        // Validate all fields
        const newErrors = {
            amount: validateAmount(formData.amount),
            type: validateRequired(formData.type, 'Payment type'),
            recipient: validateRequired(formData.recipient, 'Recipient'),
            date: validateRequired(formData.date, 'Date')
        };

        setErrors(newErrors);

        // Check if there are any errors
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        
        if (!hasErrors) {
            alert('Bill paid successfully');
        }
    };

    return (
        <>
            <div className={(styles['class-0']) + " class=BillPay"} id="65:1404">
                <div className={(styles['class-1']) + " class=Group1000000971"} id="65:1405">
                    <div className={(styles['class-2']) + " class=Bg-color"} id="65:1406">
                    </div>
                </div>
                <div className={(styles['class-3']) + " class=Rectangle398937"} id="65:1407">
                </div>
                <img className={(styles['class-4']) + " class=CGI_logo.svg(1)1"} id="65:1408" src={a_322fc3889a9ffb9988f181411fab01ed6a41a168_jpg}/>
                <div className={(styles['class-5']) + " class=Admin"} id="65:1409">
                    <div className={(styles['class-6']) + " class=User"} id="65:1410">
                        User</div>
                    <img className={(styles['class-7']) + " class=Ellipse585"} id="65:1411" src={a_4005ebe9033ad300378b00576e9bce5f794c8dfe_jpg}/>
                </div>
                <div className={(styles['class-8']) + " class=Rectangle2878"} id="65:1412">
                </div>
                <div className={(styles['class-9']) + " class=MENU"} id="65:1413">
                    MENU</div>
                <div className={(styles['class-10']) + " class=Report"} id="65:1415" onClick={() => navigate('/Report')}>
                    Report</div>
                <div className={(styles['class-11']) + " class=Rectangle398939"} id="65:1416">
                </div>
                <div className={(styles['class-12']) + " class=AccountManagement"} id="65:1417" onClick={() => navigate('/Account_Management')}>
                    Account Management</div>
                <img className={(styles['class-13']) + " class=problem-solving"} id="65:1418" src={a_c62ca26362db98409a8cf475434c9a430082622d_jpg}/>
                <img className={(styles['class-14']) + " class=user(3)"} id="65:1419" src={a_facd96e3bd2ddf468f1e8bc055e4387d281e3be1_jpg}/>
                <img className={(styles['class-15']) + " class=bill"} id="65:1420" src={a_e88f7f691f921dc7591ea89e296a79d3ffd83696_jpg}/>
                <img className={(styles['class-16']) + " class=pay"} id="65:1421" src={a_430412e86a51ebcd66abc1c2f02092ac6a645960_jpg}/>
                <div className={(styles['class-17']) + " class=CardManagement"} id="65:1444" onClick={() => navigate('/Card_Management')}>
                    Card Management</div>
                <img className={(styles['class-18']) + " class=management(1)"} id="65:1445" src={a_b2658dfc9799b15bdd78726d50b19411c22557b4_jpg}/>
                <div className={(styles['class-19']) + " class=Transaction"} id="65:1446" onClick={() => navigate('/Transaction')}>
                    Transaction</div>
                <img className={(styles['class-20']) + " class=bellicon(1)1"} id="65:1458" src={a_b561c28c4ff2b562d8c96e024843eb0a87a78041_jpg}/>
                <div className={(styles['class-21']) + " class=Billpay"} id="65:1414" onClick={() => navigate('/BillPay')}>
                    Bill pay</div>
                <div className={(styles['class-22']) + " class=Rectangle398941"} id="65:1675">
                </div>
                <div className={(styles['class-23']) + " class=Details"} id="65:1676">
                    Details</div>
                <div className={(styles['class-24']) + " class=Rectangle398942"} id="65:1685">
                </div>
                <div className={(styles['class-25']) + " class=Rectangle398943"} id="65:1686">
                </div>
                <div className={(styles['class-26']) + " class=Rectangle398945"} id="65:1688">
                </div>
                <form id="paymentForm" onSubmit={handlePayment}>
                    <input
                        className={(styles['class-27']) + " class=amount-input"}
                        id="65:1681"
                        name="amount"
                        placeholder="$250.00"
                        type="text"
                        value={formData.amount}
                        onChange={handleInputChange}
                    />
                    {errors.amount && <div className="error-message">{errors.amount}</div>}
                    
                    <input
                        className={(styles['class-28']) + " class=recipient-input"}
                        id="65:1683"
                        name="recipient"
                        placeholder="John Doe"
                        type="text"
                        value={formData.recipient}
                        onChange={handleInputChange}
                    />
                    {errors.recipient && <div className="error-message">{errors.recipient}</div>}
                    
                    <input
                        className={(styles['class-29']) + " class=type-input"}
                        id="65:1682"
                        name="type"
                        placeholder="One-Time"
                        type="text"
                        value={formData.type}
                        onChange={handleInputChange}
                    />
                    {errors.type && <div className="error-message">{errors.type}</div>}
                    
                    <input
                        className={(styles['class-30']) + " class=date-input"}
                        id="65:1684"
                        name="date"
                        placeholder="Select date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                    {errors.date && <div className="error-message">{errors.date}</div>}
                    
                    <button className={(styles['class-31']) + " class=pay-button"} id="65:1689">
                        Pay
                    </button>
                </form>
                <div className={(styles['class-32']) + " class=Amount"} id="65:1677">
                    Amount</div>
                <div className={(styles['class-33']) + " class=Type"} id="65:1678">
                    Type</div>
                <div className={(styles['class-34']) + " class=Rectangle398944"} id="65:1687">
                </div>
                <div className={(styles['class-35']) + " class=Recipent"} id="65:1679">
                    Recipent</div>
                <div className={(styles['class-36']) + " class=Date"} id="65:1680">
                    Date</div>
                <div className={(styles['class-37']) + " class=Logoutbtngrp"} id="65:1805">
                    <button className={(styles['class-38']) + " class=Logoutbtngrp"} id="65:1806">
                        Logout
                    </button>
                    <div className={(styles['class-39']) + " class=Group1000000974"} id="65:1807">
                        <img className={(styles['class-40']) + " class=logout(1)1"} id="65:1809" src={a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2_jpg}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillPay;
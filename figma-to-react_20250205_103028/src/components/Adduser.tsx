import  React, {  useState } from 'react';
import styles from '../styles/Adduser.module.css';
import { useNavigate } from 'react-router-dom';
import a_0d80f7cbc2b12f4651a3516721904b5aa7287923_jpg from '../assets/a_0d80f7cbc2b12f4651a3516721904b5aa7287923.jpg';
import a_a76104db8b3747ba32f65e348d7b4f099faf31f3_jpg from '../assets/a_a76104db8b3747ba32f65e348d7b4f099faf31f3.jpg';
import a_322fc3889a9ffb9988f181411fab01ed6a41a168_jpg from '../assets/a_322fc3889a9ffb9988f181411fab01ed6a41a168.jpg';
import a_4005ebe9033ad300378b00576e9bce5f794c8dfe_jpg from '../assets/a_4005ebe9033ad300378b00576e9bce5f794c8dfe.jpg';
import a_db101f421afb411a69c40cf766dc7e19ee902519_jpg from '../assets/a_db101f421afb411a69c40cf766dc7e19ee902519.jpg';
import a_b561c28c4ff2b562d8c96e024843eb0a87a78041_jpg from '../assets/a_b561c28c4ff2b562d8c96e024843eb0a87a78041.jpg';
import a_fcc68919f3a4b3ffd8fe9699385c1cc07c17ed73_jpg from '../assets/a_fcc68919f3a4b3ffd8fe9699385c1cc07c17ed73.jpg';
import a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2_jpg from '../assets/a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2.jpg';

const Adduser: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        phone: '',
        email: ''
    });

    const validateInput = (element: HTMLInputElement) => {
        const { id, value } = element;
        
        // Reset previous validation message
        element.setCustomValidity('');

        // Name validation
        if (id === '92:855') {
            if (!value.trim()) {
                element.setCustomValidity('Name is required');
            } else if (!/^[a-zA-Z\s]{2,50}$/.test(value)) {
                element.setCustomValidity('Name should be 2-50 characters and contain only letters');
            }
        }

        // // DOB validation
        // if (id === '92:856') {
        //     if (!value) {
        //         element.setCustomValidity('Date of Birth is required');
        //     } else {
        //         const today = new Date();
        //         const birthDate = new Date(value);
        //         const age = today.getFullYear() - birthDate.getFullYear();
        //         if (age < 2) {
        //             element.setCustomValidity('Must be at least 2 years old');
        //         }
        //     }
        // }

        // Phone validation
        if (id === '92:858') {
            if (!value) {
                element.setCustomValidity('Phone number is required');
            } else if (!/^\d{10}$/.test(value)) {
                element.setCustomValidity('Phone number must be 10 digits');
            }
        }

        // Email validation
        if (id === '92:860') {
            if (!value) {
                element.setCustomValidity('Email is required');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                element.setCustomValidity('Please enter a valid email address');
            }
        }

        // Trigger the browser's native validation UI
        element.reportValidity();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id === '92:855' ? 'name' :
             id === '92:856' ? 'dob' :
             id === '92:858' ? 'phone' :
             'email']: value
        }));
        
        validateInput(e.target);
    };

    const handleSubmit = () => {
        const form = document.querySelector('form');
        if (form?.checkValidity()) {
            alert('User details added successfully!');
            setFormData({
                name: '',
                dob: '',
                phone: '',
                email: ''
            });
        }
        else {
            alert('Please fill all details before submitting.');}
            
    };

    return (
        <>
            <div className={(styles['class-0']) + " class=Add_User"} id="92:829">
                <div className={(styles['class-1']) + " class=Rectangle398939"} id="92:830"></div>
                <div className={(styles['class-2']) + " class=Group_1000000971"} id="92:831">
                    <div className={(styles['class-3']) + " class=Bg-color"} id="92:832"></div>
                </div>
                <div className={(styles['class-4']) + " class=Rectangle398937"} id="92:833"></div>
                <img className={(styles['class-5']) + " class=CGI_logo.svg(1)1"} id="92:834" src={a_322fc3889a9ffb9988f181411fab01ed6a41a168_jpg}/>
                <div className={(styles['class-6']) + " class=Admin"} id="92:835">
                    <div className={(styles['class-7']) + " class=User"} id="92:836">User</div>
                    <img className={(styles['class-8']) + " class=Ellipse585"} id="92:837" src={a_4005ebe9033ad300378b00576e9bce5f794c8dfe_jpg}/>
                </div>
                <div className={(styles['class-9']) + " class=Rectangle2878"} id="92:838"></div>
                <div className={(styles['class-10']) + " class=Menu"} id="92:839">Menu</div>
                <div className={(styles['class-11']) + " class=Listuser"} onClick={() => navigate('/Listuser')}>List user</div>
                <div className={(styles['class-12']) + " class=Deleteuser"} onClick={() => navigate('/Deleteuser')}>Delete user</div>
                <div className={(styles['class-13']) + " class=Rectangle398938"} id="92:842"></div>
                <div className={(styles['class-14']) + " class=AddUser"} onClick={() => navigate('/Addeuser')}>Add User</div>
                <div className={(styles['class-15']) + " class=Updateuser"} id="92:844">
                    <div className={(styles['class-16']) + " class=Updateuser"} onClick={() => navigate('/Updateuser')}>Update user</div>
                </div>
                <img className={(styles['class-17']) + " class=user-sync"} id="92:846" src={a_0d80f7cbc2b12f4651a3516721904b5aa7287923_jpg}/>
                <img className={(styles['class-18']) + " class=add-user"} id="92:847" src={a_db101f421afb411a69c40cf766dc7e19ee902519_jpg}/>
                <img className={(styles['class-19']) + " class=delete"} id="92:848" src={a_a76104db8b3747ba32f65e348d7b4f099faf31f3_jpg}/>
                <img className={(styles['class-20']) + " class=contact(1)1"} id="92:849" src={a_fcc68919f3a4b3ffd8fe9699385c1cc07c17ed73_jpg}/>
                <img className={(styles['class-21']) + " class=bellicon(1)1"} id="92:850" src={a_b561c28c4ff2b562d8c96e024843eb0a87a78041_jpg}/>
                <form noValidate>
                    <div className={(styles['class-22']) + " class=Name*"} id="92:851">
                        <span className={(styles['class-23'])}>Name </span>
                        <span className={(styles['class-24'])}>*</span>
                    </div>
                    <div className={(styles['class-25']) + " class=DOB*"} id="92:852">
                        <span className={(styles['class-26'])}>DOB </span>
                        <span className={(styles['class-27'])}>*</span>
                    </div>
                    <div className={(styles['class-28']) + " class=PhoneNo*"} id="92:853">
                        <span className={(styles['class-29'])}>Phone No </span>
                        <span className={(styles['class-30'])}>*</span>
                    </div>
                    <div className={(styles['class-31']) + " class=Email*"} id="92:854">
                        <span className={(styles['class-32'])}>Email </span>
                        <span className={(styles['class-33'])}>*</span>
                    </div>
                    <input 
                        className={(styles['class-34'])} 
                        id="92:855" 
                        placeholder="Please enter name here" 
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        className={(styles['class-35'])} 
                        id="92:856" 
                        type="date"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        className={(styles['class-36'])} 
                        id="92:858" 
                        placeholder="Please enter Phone no here" 
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        className={(styles['class-37'])} 
                        id="92:860" 
                        placeholder="Please enter email id here" 
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <button 
                        className={(styles['class-38'])} 
                        id="92:864"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        Save
                    </button>
                </form>
                <div className={(styles['class-39']) + " class=Logoutadbtngrp"} id="65:1817">
                <button className={(styles['class-40']) + " class=Logoutadbtngrp"} id="65:1818" onClick={() => navigate('/Loginuser')}>
                                Logout
                            </button>
                <div className={(styles['class-41']) + " class=Group1000000974"} id="65:1819">
                <img className={(styles['class-42']) + " class=logout(1)1"} id="65:1821" src={a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2_jpg}/>
                </div>
                </div>
                </div>

        </>
    );
};

export default Adduser;
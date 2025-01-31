import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/FormdrGeneralPhy.module.css';
import logo_jpg from '../assets/Logo.jpg';

const FormdrGeneralPhy: React.FC = () => {
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);
    
    useEffect(() => {
        const validateForm = () => {
            const name = (document.getElementById('name-input') as HTMLInputElement).value.trim();
            const phone = (document.getElementById('phone-input') as HTMLInputElement).value.trim();
            const email = (document.getElementById('email-input') as HTMLInputElement).value.trim();
            const gender = document.querySelector('input[name="gender"]:checked') as HTMLInputElement;
            const doctorType = (document.getElementById('doctor-type-dropdown') as HTMLSelectElement).value;
            const slot = (document.getElementById('slot-input') as HTMLInputElement).value;
            const dob = (document.getElementById('dob-input') as HTMLInputElement).value;
            const appointmentDate = (document.getElementById('appointment-date-input') as HTMLInputElement).value;

            if (!name || !phone || !email || !gender || !doctorType || !slot || !dob || !appointmentDate) {
                alert('Please fill in all required fields.');
                return false;
            }

            if (!/^\d{10}$/.test(phone)) {
                alert('Please enter a valid 10-digit phone number.');
                return false;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            return true;
        };

        const handleFormSubmit = (e: Event) => {
            e.preventDefault();
            if (validateForm()) {
                setIsFormValid(true);
                navigate('/Popup');
            }
        };

        const appointmentForm = document.getElementById('appointment-form');
        appointmentForm?.addEventListener('submit', handleFormSubmit);

        const slotDropdownContainer = document.getElementById('slot-dropdown');
        const slotInput = document.getElementById('slot-input') as HTMLInputElement;

        const handleSelection = (item: string) => {
            if (slotInput) slotInput.value = item;
            if (slotDropdownContainer) slotDropdownContainer.style.display = 'none';
        };

        if (slotInput) {
            slotInput.onclick = () => {
                if (slotDropdownContainer) {
                    slotDropdownContainer.style.display = slotDropdownContainer.style.display === 'none' ? 'block' : 'none';
                    slotDropdownContainer.innerHTML = '<div class="dropdown-option" style="padding: 10px; cursor: pointer;">Loading...</div>';
                    
                    fetch('http://98.70.54.66:8000/time-slots')
                        .then(response => response.json())
                        .then(items => {
                            if (slotDropdownContainer) {
                                slotDropdownContainer.innerHTML = '';
                                items.forEach((item: string) => {
                                    const option = document.createElement('div');
                                    option.className = 'dropdown-option';
                                    option.textContent = item;
                                    option.onclick = () => handleSelection(item);
                                    option.style.padding = '10px';
                                    option.style.cursor = 'pointer';
                                    slotDropdownContainer.appendChild(option);
                                });
                            }
                        })
                        .catch(error => {
                            console.error('Dropdown fetch error:', error);
                            if (slotDropdownContainer) {
                                slotDropdownContainer.innerHTML = '<div class="dropdown-option" style="padding: 10px; cursor: pointer;">Error loading slots</div>';
                            }
                        });
                }
            };
        }

        const navHome = document.getElementById('nav-home');
        navHome?.addEventListener('click', () => navigate('/Homepage'));

        const navFindDoctor = document.getElementById('nav-find-doctor');
        navFindDoctor?.addEventListener('click', () => navigate('/FindADoctorPage'));

        return () => {
            appointmentForm?.removeEventListener('submit', handleFormSubmit);
            navHome?.removeEventListener('click', () => navigate('/Homepage'));
            navFindDoctor?.removeEventListener('click', () => navigate('/FindADoctorPage'));
        };
    }, [navigate, isFormValid]);

    return (
        <div className={`${styles['class-0']} Formdrgeneralphy`} id="form-general-phy">
            <header className={`${styles['class-1']} Header`} id="header"></header>
            <div className={`${styles['class-2']} Logo`} id="logo-container">
                <img alt="Company Logo" className={`${styles['class-3']} Logo`} src={logo_jpg} />
            </div>
            <nav className={`${styles['class-4']} Navigation`} id="navigation">
                <div className={`${styles['class-5']} Home`} id="nav-home">Home</div>
                <div className={`${styles['class-6']} FindADoctor`} id="nav-find-doctor">Find a Doctor</div>
                <div className={`${styles['class-7']} MyAppointment`} id="nav-my-appointment">My Appointment</div>
            </nav>
            <section className={`${styles['class-8']} Bground`} id="background"></section>
            <section className={`${styles['class-27']} Container`} id="form-container"></section>
            
            <form className={styles['class-57']} id="appointment-form">
                <div className={`${styles['class-32']}`} id="name-label">
                    <span className={styles['class-33']}>Name</span>
                    <span className={styles['class-34']}>*</span>
                </div>
                <input className={styles['class-58']} id="name-input" maxLength={50} minLength={2} name="name" placeholder="Enter your name" required type="text"/>
                
                <div className={`${styles['class-35']}`} id="dob-label">
                    <span className={styles['class-36']}>DOB</span>
                    <span className={styles['class-37']}>*</span>
                </div>
                <input className={styles['class-59']} id="dob-input" name="dob" required type="date"/>
                
                <div className={`${styles['class-41']}`} id="phone-label">
                    <span className={styles['class-42']}>Phone No</span>
                    <span className={styles['class-43']}>*</span>
                </div>
                <input className={styles['class-60']} id="phone-input" name="phone" placeholder="Enter your phone number" required type="text"/>
                
                <div className={`${styles['class-50']}`} id="email-label">
                    <span className={styles['class-51']}>Email</span>
                    <span className={styles['class-52']}>*</span>
                </div>
                <input className={styles['class-61']} id="email-input" name="email" placeholder="Enter your email" required type="email"/>
                
                <div className={`${styles['class-38']}`} id="appointment-date-label">
                    <span className={styles['class-39']}>Appointment Date</span>
                    <span className={styles['class-40']}>*</span>
                </div>
                <input className={styles['class-62']} id="appointment-date-input" name="appointment-date" required type="date"/>
                
                <div className={`${styles['class-56']}`} id="symptoms-label">Add your symptoms</div>
                <input className={styles['class-63']} id="symptoms-input" name="symptoms" placeholder="Enter your symptoms" type="text"/>
                
                <div className={`${styles['class-44']}`} id="gender-label">
                    <span className={styles['class-45']}>Gender</span>
                    <span className={styles['class-46']}>*</span>
                </div>
                <div className={`${styles['class-64']} Radiobtn`} id="gender-radiobtn">
                    <input className={styles['class-65']} id="gender-male" name="gender" required type="radio" value="male"/>
                    <label className={styles['class-66']} htmlFor="gender-male">Male</label>
                    <input className={styles['class-67']} id="gender-female" name="gender" type="radio" value="female"/>
                    <label className={styles['class-68']} htmlFor="gender-female">Female</label>
                    <input className={styles['class-69']} id="gender-other" name="gender" type="radio" value="other"/>
                    <label className={styles['class-70']} htmlFor="gender-other">Other</label>
                </div>
                
                <div className={`${styles['class-53']}`} id="doctor-type-label">
                    <span className={styles['class-54']}>Select type of Doctor</span>
                    <span className={styles['class-55']}>*</span>
                </div>
                <select className={styles['class-71']} id="doctor-type-dropdown" name="doctor-type" required>
                    <option value="general-physician">General Physician</option>
                </select>
                
                <div className={`${styles['class-47']}`} id="book-slot-label">
                    <span className={styles['class-48']}>Book your slot</span>
                    <span className={styles['class-49']}>*</span>
                </div>
                <div className={styles['class-72']} id="slot-dropdown-container">
                    <input className={styles['class-73']} id="slot-input" name="slot" placeholder="Book your slot" readOnly required type="text"/>
                    <div className={styles['class-74']} id="slot-dropdown"></div>
                </div>
                
                <button className={styles['class-76']} type="submit">Book New Appointment</button>
            </form>
        </div>
    );
};

export default FormdrGeneralPhy;
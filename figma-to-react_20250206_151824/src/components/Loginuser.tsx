import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Loginuser.module.css';
import a_322fc3889a9ffb9988f181411fab01ed6a41a168_jpg from '../assets/a_322fc3889a9ffb9988f181411fab01ed6a41a168.jpg';
import a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2_jpg from '../assets/a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2.jpg';

const Loginuser: React.FC = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const emailInput = emailInputRef.current;
        const passwordInput = passwordInputRef.current;
        const form = formRef.current;

        if (!emailInput || !passwordInput || !form) return;

        const validateEmail = (email: string): boolean => {
            if (email.includes('@')) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
            // For non-email usernames (like admin), just check minimum length
            return email.toLowerCase() === 'admin' || email.length >= 3;
        };

        const validatePassword = (password: string): boolean => {
            return password.length >= 8;
        };

        const handleEmailInput = () => {
            const emailValue = emailInput.value.trim().toLowerCase();
            
            if (!emailValue) {
                emailInput.setCustomValidity('Please fill in this field');
            } else if (!validateEmail(emailValue)) {
                if (emailValue.includes('@')) {
                    emailInput.setCustomValidity('Please enter a valid email address');
                } else if (emailValue !== 'admin' && emailValue.length < 3) {
                    emailInput.setCustomValidity('Username must be "admin" or at least 3 characters long');
                } else {
                    emailInput.setCustomValidity('');
                }
            } else {
                emailInput.setCustomValidity('');
            }
        };

        const handlePasswordInput = () => {
            const passwordValue = passwordInput.value;
            
            if (!passwordValue) {
                passwordInput.setCustomValidity('Please fill in this field');
            } else if (!validatePassword(passwordValue)) {
                passwordInput.setCustomValidity('Password must be at least 8 characters long');
            } else {
                passwordInput.setCustomValidity('');
            }
        };

        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            
            handleEmailInput();
            handlePasswordInput();

            if (emailInput.validity.valid && passwordInput.validity.valid) {
                const emailValue = emailInput.value.trim().toLowerCase();
                
                if (emailValue === 'admin' || (emailValue.includes('@') && validateEmail(emailValue))) {
                    // Show success alert only for valid admin or email users
                    const result = window.confirm('Login successful!');
                    
                    if (result) {
                        if (emailValue === 'admin') {
                            navigate('/Adduser');
                        } else {
                            navigate('/Account_management');
                        }
                    }
                } else {
                    // Invalid username format
                    emailInput.setCustomValidity('Username must be either "admin" or a valid email address');
                    emailInput.reportValidity();
                }
            } else {
                if (!emailInput.validity.valid) {
                    emailInput.reportValidity();
                } else if (!passwordInput.validity.valid) {
                    passwordInput.reportValidity();
                }
            }
        };

        emailInput.addEventListener('input', () => {
            emailInput.setCustomValidity('');
        });

        passwordInput.addEventListener('input', () => {
            passwordInput.setCustomValidity('');
        });

        form.addEventListener('submit', handleSubmit);

        return () => {
            emailInput.removeEventListener('input', () => {
                emailInput.setCustomValidity('');
            });
            passwordInput.removeEventListener('input', () => {
                passwordInput.setCustomValidity('');
            });
            form.removeEventListener('submit', handleSubmit);
        };
    }, [navigate]);



    return (
        <div className={`${styles['class-0']} Loginuser`} id="53:592">
            <div className={`${styles['class-1']} Group_1000000971`} id="53:593">
                <div className={`${styles['class-2']} Bg-color`} id="53:594"></div>
            </div>
            
            <div className={`${styles['class-3']} div`} id="53:595">
                <div className={`${styles['class-4']} container`} id="I53:595;2:180"></div>
                
                <div className={`${styles['class-5']} Login`} id="I53:595;2:183">
                    Login
                </div>

                <form ref={formRef} noValidate>
                    <div className={`${styles['class-6']} email_text_field`} id="I53:595;2:192">
                        <div className={`${styles['class-7']} Enteryourusernameoremailaddress`} id="I53:595;2:192;31:23">
                            <span className={styles['class-8']}>
                                Please Enter your username or email address 
                            </span>
                            <span className={styles['class-9']}>*</span>
                        </div>
                        <input
                            ref={emailInputRef}
                            className={`${styles['class-11']} Textbox`}
                            name="email"
                            placeholder="Username or email address"
                            required
                        />
                    </div>

                    <div className={`${styles['class-12']} password_textfeild`} id="I53:595;2:193">
                        <div className={`${styles['class-13']} EnteryourPassword`} id="I53:595;2:193;31:23">
                            <span className={styles['class-14']}>Enter your Password </span>
                            <span className={styles['class-15']}>*</span>
                        </div>
                        <input
                            ref={passwordInputRef}
                            className={`${styles['class-16']} textbox`}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        className={`${styles['class-17']} Loginuserbtngrp`}
                    >
                        Login
                    </button>
                </form>
            </div>

            <div className={`${styles['class-18']} Fb`} id="I53:595;2:199"></div>
            <div className={`${styles['class-19']} WelcomeAdmin`} id="I53:595;49:577">
                Welcome 
            </div>
            <div className={`${styles['class-20']} Rectangle398937`} id="53:596"></div>
            <img 
                className={`${styles['class-21']} CGI_logo`} 
                id="53:597" 
                src={a_322fc3889a9ffb9988f181411fab01ed6a41a168_jpg}
                alt="CGI Logo"
            />
        <div className={(styles['class-37']) + " class=Logoutbtngrp"} id="65:1805">
            <button className={(styles['class-38']) + " class=Logoutbtngrp"} id="65:1806">
                            Logout
                        </button>
            <div className={(styles['class-39']) + " class=Group1000000974"} id="65:1807">
            <img className={(styles['class-40']) + " class=logout(1)1"} id="65:1809" src={a_e504e91842d0d6ad6298ddafa2551bb53a6f86f2_jpg}/>
            </div>
            </div>
            </div>
    );
};

export default Loginuser;
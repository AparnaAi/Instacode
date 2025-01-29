import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import logo_jpg from '../assets/Logo.jpg';
import apple_jpg from '../assets/Apple.jpg';
import imagelogin_jpg from '../assets/ImageLogin.jpg';
import fb_jpg from '../assets/Fb.jpg';
import googlepng_jpg from '../assets/Googlepng.jpg';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.MouseEvent) => {
    event.preventDefault();

    const usernameEmailInput = document.getElementById('username-email-input') as HTMLInputElement;
    const passwordInput = document.getElementById('password-input') as HTMLInputElement;

    if (!usernameEmailInput.checkValidity()) {
      alert(usernameEmailInput.title);
      return;
    }

    if (!passwordInput.checkValidity()) {
      alert(passwordInput.title);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful');
        navigate('/Homepage');
      } else {
        alert(data.detail || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  useEffect(() => {
    const loginButton = document.getElementById('login-button');
    
    loginButton?.addEventListener('click', handleLogin);

    return () => {
      loginButton?.removeEventListener('click', handleLogin);
    };
  }, [username, password, navigate]);

  return (
    <>
      <div className={`${styles['class-0']} Login`} id="main-login">
        <div className={`${styles['class-1']} BgColor`} id="background-color"></div>
        
        <header className={`${styles['class-2']} Header`} id="header"></header>
        
        <section className={`${styles['class-5']} Div`} id="login-section">
          <div className={`${styles['class-6']} Container`} id="login-container"></div>
          
          <div className={`${styles['class-7']} WelcomeToPromptoraHealthcare`} id="welcome-message">
            <span className={styles['class-8']}>Welcome to</span>
            <span className={styles['class-9']}> XYZ Healthcare</span>
          </div>

          <div className={`${styles['class-10']} NoAccountSignUp`} id="signup-prompt">
            <span className={styles['class-11']}>No Account ?<br /></span>
            <span className={styles['class-12']}>Sign up</span>
          </div>

          <div className={`${styles['class-13']} Login`} id="login-title">
            Login
          </div>

          <div className={`${styles['class-14']} SocialIcons`} id="social-icons">
            <div className={`${styles['class-15']} Iph`} id="google-signin">
              <div className={styles['class-16']} id="Rectangle14"></div>
              <div className={styles['class-17']}>Sign in with Google</div>
            </div>
            <div className={styles['class-18']} id="facebook-signin"></div>
            <div className={styles['class-19']} id="apple-signin"></div>
          </div>

          <div className={`${styles['class-20']} EmailTextField`} id="email-textfield">
            <div className={styles['class-21']}>
              <span className={styles['class-22']}>Please Enter your username or email address</span>
              <span className={styles['class-23']}>*</span>
            </div>
            <input
              className={`${styles['class-25']} Textbox`}
              id="username-email-input"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9._%+-]{3,}$"
              placeholder="Username or email address"
              required
              title="Enter a valid email address or username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={`${styles['class-26']} PasswordTextfeild`} id="password-textfield">
            <div className={styles['class-27']}>
              <span className={styles['class-28']}>Enter your Password</span>
              <span className={styles['class-29']}>*</span>
            </div>
            <input
              className={`${styles['class-30']} Textbox`}
              id="password-input"
              minLength={6}
              placeholder="Password"
              required
              title="Password must be at least 6 characters long"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={`${styles['class-31']} ForgotPassword`} id="forgot-password">
            Forgot Password
          </div>

          <div className={`${styles['class-32']} Loginbtngrp`} id="login-button-group">
            <button className={`${styles['class-33']} Loginbutton`} id="login-button">
              <span className={styles['class-34']}>Login</span>
            </button>
          </div>

          <img
            alt="Google Icon"
            className={`${styles['class-35']} Googlepng`}
            src={googlepng_jpg}
          />
          
          <img
            alt="Facebook Icon"
            className={`${styles['class-36']} Fb`}
            src={fb_jpg}
          />
          
          <img
            alt="Apple Icon"
            className={`${styles['class-37']} Apple`}
            src={apple_jpg}
          />
        </section>

        <img
          alt="Login Illustration"
          className={`${styles['class-38']} Imagelogin`}
          src={imagelogin_jpg}
        />
        <img
          alt="Company Logo"
          className={`${styles['class-4']} Logo`}
          src={logo_jpg}
        />
      </div>
    </>
  );
};

export default Login;
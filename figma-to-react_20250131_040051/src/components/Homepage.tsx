import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Homepage.module.css';
import logo_jpg from '../assets/Logo.jpg';
import homedrimg_jpg from '../assets/homedrimg.jpg';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles['class-0']}>
        <div className={styles['class-1']}></div>
        <div className={styles['class-2']}>
          <div className={styles['class-3']} onClick={() => navigate('/Homepage')}>Home</div>
          <div className={styles['class-4']} onMouseEnter={() => navigate('/FindADoctorPage')}>Find a Doctor</div>
          <div className={styles['class-5']}>My Appointment</div>
        </div>
        <div className={styles['class-6']}>
          <div className={styles['class-7']}></div>
          <div className={styles['class-8']} onClick={() => navigate('/Login')}>Logout</div>
        </div>
        <div className={styles['class-9']}></div>
        <div className={styles['class-10']}>
          At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
        </div>
        <div className={styles['class-11']}>Promptora Healthcare</div>
        <div className={styles['class-12']}>Providing Quality Healthcare for a Brighter and Healthy Future</div>
        <div className={styles['class-13']}></div>
        <div className={styles['class-14']}>Previous Checkups</div>
        <div className={styles['class-15']}>Dr. Stacy Juyal</div>
        <div className={styles['class-16']}>Dental Checkup</div>
        <div className={styles['class-17']}>
          <div className={styles['class-18']}></div>
          <div className={styles['class-19']}>12 Oct</div>
        </div>
        <div className={styles['class-20']}>12 Jan</div>
        <div className={styles['class-21']}></div>
        <div className={styles['class-22']}></div>
        <div className={styles['class-23']}>SJ</div>
        <div className={styles['class-24']}></div>
        <div className={styles['class-25']}></div>
        <div className={styles['class-26']}>AD</div>
        <div className={styles['class-27']}>Dr. Amy Dunham</div>
        <div className={styles['class-28']}>Eye Checkup</div>
        <div className={styles['class-29']}></div>
        <div className={styles['class-30']}>5 Sep</div>
        <div className={styles['class-31']}></div>
        <div className={styles['class-32']}></div>
        <div className={styles['class-33']}>DJ</div>
        <div className={styles['class-34']}>Dr. Demi Joan</div>
        <div className={styles['class-35']}>Report</div>
        <div className={styles['class-36']}>
          <div className={styles['class-37']}></div>
          <div className={styles['class-38']}>2 March</div>
        </div>
        <div className={styles['class-39']}>Dr. Susan Myers</div>
        <div className={styles['class-40']}>Health Checkup</div>
        <div className={styles['class-41']}></div>
        <div className={styles['class-42']}></div>
        <div className={styles['class-43']}></div>
        <div className={styles['class-44']}>SM</div>
        <img className={styles['class-45']} src={homedrimg_jpg} alt="Home Doctor"/>
        <div className={styles['class-46']}>
          <img className={styles['class-47']} src={logo_jpg} alt="Logo"/>
        </div>
        <div className={styles['class-48']}>
          <div className={styles['class-49']}></div>
          <div className={styles['class-50']} onClick={() => navigate('/Formdr')}>Book New Appointment</div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
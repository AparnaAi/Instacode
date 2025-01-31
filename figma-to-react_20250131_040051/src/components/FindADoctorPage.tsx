import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/FindADoctorPage.module.css';
import rightarrow4_jpg from '../assets/rightarrow4.jpg';
import rightarrow6_jpg from '../assets/rightarrow6.jpg';
import logo_jpg from '../assets/Logo.jpg';
import dricon_jpg from '../assets/dricon.jpg';
import rightarrow5_jpg from '../assets/rightarrow5.jpg';
import rightarrow2_jpg from '../assets/rightarrow2.jpg';
import homedrimg_jpg from '../assets/homedrimg.jpg';
import rightarrow1_jpg from '../assets/rightarrow1.jpg';
import rightarrow3_jpg from '../assets/rightarrow3.jpg';

const FindADoctorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (destination: string) => {
    navigate(`/${destination}`);
  };

  return (
    <>
      <div className={`${styles['class-0']} Findadoctorpage`}>
        <div className={`${styles['class-1']} Header`}></div>
        <div 
          className={`${styles['class-2']} Navigation`}
        >
          <div 
            className={`${styles['class-3']} Home`}
            onClick={() => handleNavigation('Homepage')}
          >
            Home
          </div>
          <div 
            className={`${styles['class-4']} Findadoctor`}
            onMouseEnter={() => handleNavigation('FindADoctorPage')}
          >
            Find a Doctor
          </div>
          <div className={`${styles['class-5']} Myappointment`}>My Appointment</div>
        </div>
        <div 
          className={`${styles['class-6']} Logoutbtngrp`} 
          onClick={() => handleNavigation('Login')}
        >
          <div className={`${styles['class-7']} Logoutbtn`}></div>
          <div className={`${styles['class-8']} Logout`}>Logout</div>
        </div>
        <div className={`${styles['class-9']} Bground`}></div>
        <div className={`${styles['class-10']} AtOurHospitalWeAreDedicatedToProvidingExceptionalMedicalCareToOurPatientsAndTheirFamiliesOurExperiencedTeamOfMedicalProfessionalsCuttingEdgeTechnologyAndCompassionateApproachMakeUsALeaderInTheHealthcareIndustry`}>
          At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
        </div>
        <div className={`${styles['class-11']} PromptoraHealthcare`}>
          Promptora Healthcare
        </div>
        <div className={`${styles['class-12']} ProvidingQualityHealthcareForABrighterAndHealthyFuture`}>
          Providing Quality Healthcare for a Brighter and Healthy Future
        </div>
        <div className={`${styles['class-13']} Container`}></div>
        <img className={`${styles['class-14']} Homedrimg`} src={homedrimg_jpg} alt="Home Doctor" />
        <div className={`${styles['class-15']} Logo`}>
          <img className={`${styles['class-16']} Logo`} src={logo_jpg} alt="Logo" />
        </div>
        <div 
          className={`${styles['class-17']} Bookaptbtn`}
          onClick={() => handleNavigation('Formdr')}
        >
          <div className={`${styles['class-18']} Btnbg`}></div>
          <div className={`${styles['class-19']} BookNewAppointment`}>Book New Appointment</div>
        </div>
        <div className={`${styles['class-20']} FindadoctorContainer`}></div>
        <div className={`${styles['class-21']} Orthodontist`}>OrthoDontist</div>
        <div className={`${styles['class-22']} Optometrist`}>Optometrist</div>
        <div className={`${styles['class-23']} Other`}>Other</div>
        <img className={`${styles['class-24']} Dricon`} src={dricon_jpg} alt="Doctor Icon" />
        <img className={`${styles['class-25']} Dricon`} src={dricon_jpg} alt="Doctor Icon" />
        <img className={`${styles['class-26']} Dricon`} src={dricon_jpg} alt="Doctor Icon" />
        <div className={`${styles['class-27']} Bookappointmenthere4`}>Book appointment here</div>
        <div className={`${styles['class-28']} Bookappointmenthere5`}>Book appointment here</div>
        <div className={`${styles['class-29']} Bookappointmenthere6`}>Book appointment here</div>
        <div className={`${styles['class-30']} GeneralDentist`}>General Dentist</div>
        <div className={`${styles['class-31']} Chiropactor`}>Chiropactor</div>
        <img className={`${styles['class-32']} Dricon`} src={dricon_jpg} alt="Doctor Icon" />
        <img className={`${styles['class-33']} Dricon`} src={dricon_jpg} alt="Doctor Icon" />
        <div className={`${styles['class-34']} Bookappointmenthere2`}>Book appointment here</div>
        <div className={`${styles['class-35']} Bookappointmenthere3`}>Book appointment here</div>
        <img className={`${styles['class-36']} Rightarrow3`} src={rightarrow3_jpg} alt="Right Arrow" />
        <img className={`${styles['class-37']} Rightarrow6`} src={rightarrow6_jpg} alt="Right Arrow" />
        <img className={`${styles['class-38']} Rightarrow2`} src={rightarrow2_jpg} alt="Right Arrow" />
        <img className={`${styles['class-39']} Rightarrow5`} src={rightarrow5_jpg} alt="Right Arrow" />
        <div 
          className={`${styles['class-40']} Rightarrow1`}
          onClick={() => handleNavigation('GeneralPhysician')}
        >
          <div className={`${styles['class-41']} GeneralPhysician`}>General Physician</div>
          <img className={`${styles['class-42']} Dricon`} src={dricon_jpg} alt="Doctor Icon" />
          <div className={`${styles['class-43']} Bookappointmenthere1`}>Book appointment here</div>
          <img className={`${styles['class-44']} Rightarrow1`} src={rightarrow1_jpg} alt="Right Arrow" />
        </div>
        <img className={`${styles['class-45']} Rightarrow4`} src={rightarrow4_jpg} alt="Right Arrow" />
        <div className={`${styles['class-46']} Rectangle39917`}></div>
        <div className={`${styles['class-47']} PreviousCheckups`}>Previous Checkups</div>
        <div className={`${styles['class-48']} DrStacyJuyal`}>Dr. Stacy juyal</div>
        <div className={`${styles['class-49']} DentalCheckup`}>Dental Checkup</div>
        <div className={`${styles['class-50']} Group1000000970`}>
          <div className={`${styles['class-51']} Rectangle398931`}></div>
          <div className={`${styles['class-52']} Oct`}>12 oct</div>
        </div>
        <div className={`${styles['class-53']} Jan`}>12 Jan</div>
        <div className={`${styles['class-54']} Ellipse371`}></div>
        <div className={`${styles['class-55']} Ellipse381`}></div>
        <div className={`${styles['class-56']} Sj`}>SJ</div>
        <div className={`${styles['class-57']} Ellipse372`}></div>
        <div className={`${styles['class-58']} Ellipse382`}></div>
        <div className={`${styles['class-59']} Ad`}>AD</div>
        <div className={`${styles['class-60']} DrAmyDunham`}>Dr. Amy Dunham</div>
        <div className={`${styles['class-61']} EyeCheckup`}>Eye Checkup</div>
        <div className={`${styles['class-62']} Rectangle398932`}></div>
        <div className={`${styles['class-63']} Sep`}>5 sep</div>
        <div className={`${styles['class-64']} Ellipse373`}></div>
        <div className={`${styles['class-65']} Ellipse383`}></div>
        <div className={`${styles['class-66']} Dj`}>DJ</div>
        <div className={`${styles['class-67']} DrDemiJoan`}>Dr. Demi Joan</div>
        <div className={`${styles['class-68']} Report`}>Report</div>
        <div className={`${styles['class-69']} Group48095503`}>
          <div className={`${styles['class-70']} Rectangle398933`}></div>
          <div className={`${styles['class-71']} March`}>2 march</div>
        </div>
        <div className={`${styles['class-72']} DrSusanMyers`}>Dr. Susan Myers</div>
        <div className={`${styles['class-73']} HealthCheckup`}>Health Checkup</div>
        <div className={`${styles['class-74']} Rectangle398934`}></div>
        <div className={`${styles['class-75']} Ellipse374`}></div>
        <div className={`${styles['class-76']} Ellipse384`}></div>
        <div className={`${styles['class-77']} Sm`}>SM</div>
      </div>
    </>
  );
};

export default FindADoctorPage;
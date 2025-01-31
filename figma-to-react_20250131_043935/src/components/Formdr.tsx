import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Formdr.module.css';
import logo_jpg from '../assets/Logo.jpg';

const Formdr: React.FC = () => {
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const doctorTypeDropdown = document.getElementById('dropdown-doctor-type') as HTMLSelectElement;
    const bookSlotDropdown = document.getElementById('dropdown-book-slot') as HTMLSelectElement;

    const loadOptions = (dropdown: HTMLSelectElement, url: string, defaultText: string) => {
      const loadingText = document.createElement('option');
      loadingText.textContent = 'Loading...';
      dropdown.appendChild(loadingText);

      fetch(url)
        .then(response => response.json())
        .then(items => {
          dropdown.innerHTML = `<option value="" disabled selected>${defaultText}</option>`;
          items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            dropdown.appendChild(option);
          });
        })
        .catch(error => {
          console.error('Dropdown fetch error:', error);
          dropdown.innerHTML = `<option value="" disabled selected>Error loading options</option>`;
        });
    };

    loadOptions(doctorTypeDropdown, 'http://98.70.54.66:8000/doctor-types', 'Select type of Doctor');
    loadOptions(bookSlotDropdown, 'http://98.70.54.66:8000/time-slots', 'Book your slot');

    const validateForm = (event: Event) => {
      event.preventDefault();
      
      const name = (document.getElementById('input-name') as HTMLInputElement).value;
      const dob = (document.getElementById('input-dob') as HTMLInputElement).value;
      const phone = (document.getElementById('input-phone') as HTMLInputElement).value;
      const email = (document.getElementById('input-email') as HTMLInputElement).value;
      const appointmentDate = (document.getElementById('input-appointment-date') as HTMLInputElement).value;
      const gender = document.querySelector('input[name="gender"]:checked') as HTMLInputElement;
      const doctorType = doctorTypeDropdown.value;
      const bookSlot = bookSlotDropdown.value;

      if (!name || !dob || !phone || !email || !appointmentDate || !gender || !doctorType || !bookSlot) {
        alert('Please fill all required fields.');
        setFormValid(false);
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        setFormValid(false);
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        setFormValid(false);
        return;
      }

      setFormValid(true);
      navigate('/Popup');
    };

    document
      .querySelector('#book-appointment-btn button')
      ?.addEventListener('click', validateForm);

    const homeNav = document.getElementById('nav-home');
    const findDoctorNav = document.getElementById('nav-find-doctor');

    homeNav?.addEventListener('click', () => navigate('/Homepage'));
    findDoctorNav?.addEventListener('click', () => navigate('/FindADoctorPage'));

    return () => {
      document
        .querySelector('#book-appointment-btn button')
        ?.removeEventListener('click', validateForm);
      homeNav?.removeEventListener('click', () => navigate('/Homepage'));
      findDoctorNav?.removeEventListener('click', () => navigate('/FindADoctorPage'));
    };
  }, [navigate, formValid]);

  return (
    <>
      <div className={styles['class-0']} id="form-container">
        <header className={styles['class-1']} id="main-header">
        </header>
        <div className={styles['class-2']} id="logo-container">
          <img alt="Company Logo" className={styles['class-3']} src={logo_jpg} />
        </div>
        <nav className={styles['class-4']} id="navigation-bar">
          <div className={styles['class-5']} id="nav-home">Home</div>
          <div className={styles['class-6']} id="nav-find-doctor">Find a Doctor</div>
          <div className={styles['class-7']} id="nav-my-appointment">My Appointment</div>
        </nav>
        <div className={styles['class-8']} id="background" />
        <div className={styles['class-9']} id="date-range-icon-1">
          <div className={styles['class-10']} />
          <div className={styles['class-11']} />
          <div className={styles['class-12']} />
          <div className={styles['class-13']} />
          <div className={styles['class-14']} />
          <div className={styles['class-15']} />
          <div className={styles['class-16']} />
          <div className={styles['class-17']} />
        </div>
        <div className={styles['class-18']} id="date-range-icon-2">
          <div className={styles['class-19']} />
          <div className={styles['class-20']} />
          <div className={styles['class-21']} />
          <div className={styles['class-22']} />
          <div className={styles['class-23']} />
          <div className={styles['class-24']} />
          <div className={styles['class-25']} />
          <div className={styles['class-26']} />
        </div>
        <section className={styles['class-27']} id="main-container">
        </section>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles['class-28']} id="label-name">
            <span className={styles['class-29']}>Name</span>
            <span className={styles['class-30']}>*</span>
          </div>
          <div className={styles['class-31']} id="label-dob">
            <span className={styles['class-32']}>DOB</span>
            <span className={styles['class-33']}>*</span>
          </div>
          <div className={styles['class-34']} id="label-appointment-date">
            <span className={styles['class-35']}>Appointment Date</span>
            <span className={styles['class-36']}>*</span>
          </div>
          <div className={styles['class-37']} id="label-phone-no">
            <span className={styles['class-38']}>Phone No</span>
            <span className={styles['class-39']}>*</span>
          </div>
          <div className={styles['class-40']} id="label-gender">
            <span className={styles['class-41']}>Gender</span>
            <span className={styles['class-42']}>*</span>
          </div>
          <div className={styles['class-43']} id="label-book-slot">
            <span className={styles['class-44']}>Book your slot</span>
            <span className={styles['class-45']}>*</span>
          </div>
          <div className={styles['class-46']} id="label-email">
            <span className={styles['class-47']}>Email</span>
            <span className={styles['class-48']}>*</span>
          </div>
          <div className={styles['class-49']} id="label-doctor-type">
            <span className={styles['class-50']}>Select type of Doctor</span>
            <span className={styles['class-51']}>*</span>
          </div>
          <div className={styles['class-52']} id="label-symptoms">
            Add your symptoms
          </div>
          <input
            className={styles['class-53']}
            id="input-name"
            maxLength={50}
            minLength={2}
            placeholder="Please enter name here"
            required
          />
          <input
            className={styles['class-54']}
            id="input-dob"
            placeholder="Please select your DOB"
            required
            type="date"
          />
          <input
            className={styles['class-55']}
            id="input-phone"
            placeholder="Please enter Phone no here"
            required
          />
          <input
            className={styles['class-56']}
            id="input-email"
            placeholder="Please enter email id here"
            required
            type="email"
          />
          <input
            className={styles['class-57']}
            id="input-appointment-date"
            placeholder="Please select your appointment date"
            required
            type="date"
          />
          <input
            className={styles['class-58']}
            id="input-symptoms"
            maxLength={200}
            placeholder="Please type your symptoms"
          />
          <div className={styles['class-59']} id="gender-radio">
            <input className={styles['class-60']} name="gender" required type="radio" value="male" />
            <div className={styles['class-61']}>Male</div>
            <input className={styles['class-62']} name="gender" type="radio" value="female" />
            <div className={styles['class-63']}>Female</div>
            <input className={styles['class-64']} name="gender" type="radio" value="other" />
            <div className={styles['class-65']}>Other</div>
          </div>
          <select className={styles['class-66']} id="dropdown-doctor-type" required>
            <option disabled selected value="">Select type of Doctor</option>
          </select>
          <select className={styles['class-67']} id="dropdown-book-slot" required>
            <option disabled selected value="">Book your slot</option>
          </select>
          <div className={styles['class-68']} id="book-appointment-btn">
            <button className={styles['class-69']} type="submit">
              Book New Appointment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formdr;
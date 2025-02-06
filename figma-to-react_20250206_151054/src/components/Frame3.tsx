import React, { useState } from 'react';
import styles from '../styles/Frame3.module.css';

const Frame3: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        phone: '',
        accountNo: '',
        address: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        dob: false,
        phone: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        if (errors[id as keyof typeof errors]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [id]: false,
            }));
        }
    };

    const handleSave = () => {
        const newErrors = {
            name: !formData.name,
            dob: !formData.dob,
            phone: !formData.phone,
        };

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.dob && !newErrors.phone) {
            alert('Details edited successfully!');
        } else {
            alert('Please fill in all required fields!');
        }
    };

    return (
        <>
            <div className={`${styles['class-0']} Frame3`} id="65:1886">
                <div className={`${styles['class-1']} Rectangle398939`} id="65:1861"></div>
                <div className={`${styles['class-2']} Name*`} id="65:1862">
                    <span className={styles['class-3']}>Name </span>
                    <span className={styles['class-4']}>*</span>
                </div>
                <input
                    className={`${styles['class-14']} Name_Textbox ${errors.name ? styles['error'] : ''}`}
                    id="name"
                    placeholder="Daniel bryan"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <div className={`${styles['class-5']} DOB*`} id="65:1863">
                    <span className={styles['class-6']}>DOB </span>
                    <span className={styles['class-7']}>*</span>
                </div>
                <input
                    className={`${styles['class-15']} Name_Textbox ${errors.dob ? styles['error'] : ''}`}
                    id="dob"
                    placeholder="12/5/1991"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                />
                <div className={`${styles['class-10']} PhoneNo*`} id="65:1866">
                    <span className={styles['class-11']}>Phone No </span>
                    <span className={styles['class-12']}>*</span>
                </div>
                <input
                    className={`${styles['class-18']} Name_Textbox ${errors.phone ? styles['error'] : ''}`}
                    id="phone"
                    placeholder="684685366565"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <div className={`${styles['class-8']} AccountNO`} id="65:1864">
                    Account NO
                </div>
                <input
                    className={`${styles['class-16']} Name_Textbox`}
                    id="accountNo"
                    placeholder="344567890-98"
                    type="number"
                    value={formData.accountNo}
                    onChange={handleInputChange}
                />
                <div className={`${styles['class-9']} Address`} id="65:1865">
                    Address
                </div>
                <input
                    className={`${styles['class-17']} Name_Textbox`}
                    id="address"
                    placeholder="hdfgfurhfrhgdrhgiuhoough"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                />
                <div className={`${styles['class-13']} Email`} id="65:1867">
                    Email
                </div>
                <input
                    className={`${styles['class-19']} Name_Textbox`}
                    id="email"
                    placeholder="Danielbryan@email.com"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <button
                    className={`${styles['class-21']} Save`}
                    id="65:1883"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </>
    );
};

export default Frame3;

import { React } from 'react';
import styles from '../styles/Popup.module.css';
import logo_jpg from '../assets/Logo.jpg';
import { useNavigate } from 'react-router-dom';

const Popup: React.FC = () => {
    const navigate = useNavigate();

    const handleMouseEnter = (route: string) => {
        navigate(route);
    };

    const handleClick = (route: string) => {
        navigate(route);
    };

    return (
        <>
            <div className={(styles['class-0']) + " class=Popup"} id="1198:123">
                <div className={(styles['class-1']) + " class=Header"} id="1198:124">
                </div>
               
                <div className={(styles['class-4']) + " class=navigation"} id="1198:126">
                    <div
                        className={(styles['class-5']) + " class=Home"}
                        id="1198:127"
                        onClick={() => handleClick('/Homepage')}
                    >Home </div>
                    <div
                        className={(styles['class-6']) + " class=FindaDoctor"}
                        id="1198:128"
                        onMouseEnter={() => handleMouseEnter('/FindADoctorPage')}
                    >Find a Doctor</div>
                    <div className={(styles['class-7']) + " class=MyAppointment"} id="1198:129">My Appointment</div>
                </div>
                <div className={(styles['class-8']) + " class=bground"} id="1198:130">
                </div>
                <div className={(styles['class-9']) + " class=date_range_duotone"} id="1198:131">
                    <div className={(styles['class-10']) + " class=Rectangle26"} id="I1198:131;0:332">
                    </div>
                    <div className={(styles['class-11']) + " class=Rectangle25"} id="I1198:131;0:333">
                    </div>
                    <div className={(styles['class-12']) + " class=Line1"} id="I1198:131;0:334">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-13']) + " class=Line2"} id="I1198:131;0:335">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-14']) + " class=Rectangle27"} id="I1198:131;0:336">
                    </div>
                    <div className={(styles['class-15']) + " class=Rectangle29"} id="I1198:131;0:337">
                    </div>
                    <div className={(styles['class-16']) + " class=Rectangle28"} id="I1198:131;0:338">
                    </div>
                    <div className={(styles['class-17']) + " class=Rectangle30"} id="I1198:131;0:339">
                    </div>
                </div>
                <div className={(styles['class-18']) + " class=date_range_duotone"} id="1198:132">
                    <div className={(styles['class-19']) + " class=Rectangle26"} id="I1198:132;0:332">
                    </div>
                    <div className={(styles['class-20']) + " class=Rectangle25"} id="I1198:132;0:333">
                    </div>
                    <div className={(styles['class-21']) + " class=Line1"} id="I1198:132;0:334">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-22']) + " class=Line2"} id="I1198:132;0:335">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-23']) + " class=Rectangle27"} id="I1198:132;0:336">
                    </div>
                    <div className={(styles['class-24']) + " class=Rectangle29"} id="I1198:132;0:337">
                    </div>
                    <div className={(styles['class-25']) + " class=Rectangle28"} id="I1198:132;0:338">
                    </div>
                    <div className={(styles['class-26']) + " class=Rectangle30"} id="I1198:132;0:339">
                    </div>
                </div>
                <div className={(styles['class-27']) + " class=Container"} id="1198:133">
                </div><div className={(styles['class-28']) + " class=Pleaseenternamehere"} id="1198:134">Please enter name  here</div>
                <div className={(styles['class-29']) + " class=bookaptformbtn"} id="1198:135">
                    <div
                        className={(styles['class-30']) + " class=bookaptformbtn"}
                        id="1198:136"
                        onClick={() => handleClick('/Popup')}
                    >
                        <div className={(styles['class-31']) + " class=Group1000000969"} id="1198:137">
                            <div className={(styles['class-32']) + " class=Rectangle39915"} id="1198:138">
                            </div>
                        </div>
                        <div className={(styles['class-33']) + " class=BookNewAppointment"} id="1198:139">Book New Appointment</div>
                    </div>
                </div>
                <div className={(styles['class-34']) + " class=Name*"} id="1198:140"><span className={(styles['class-35'])}>Name </span><span className={(styles['class-36'])}>*</span></div>
                <div className={(styles['class-37']) + " class=DOB*"} id="1198:141"><span className={(styles['class-38'])}>DOB </span><span className={(styles['class-39'])}>*</span></div>
                <div className={(styles['class-40']) + " class=AppointmentDate*"} id="1198:142"><span className={(styles['class-41'])}>Appointment Date </span><span className={(styles['class-42'])}>*</span></div>
                <div className={(styles['class-43']) + " class=PhoneNo*"} id="1198:143"><span className={(styles['class-44'])}>Phone No </span><span className={(styles['class-45'])}>*</span></div>
                <div className={(styles['class-46']) + " class=Gender*"} id="1198:144"><span className={(styles['class-47'])}>Gender </span><span className={(styles['class-48'])}>*</span></div>
                <div className={(styles['class-49']) + " class=Bookyourslot*"} id="1198:145"><span className={(styles['class-50'])}>Book your slot </span><span className={(styles['class-51'])}>*</span></div>
                <div className={(styles['class-52']) + " class=Email*"} id="1198:146"><span className={(styles['class-53'])}>Email </span><span className={(styles['class-54'])}>*</span></div>
                <div className={(styles['class-55']) + " class=SelecttypeofDoctor*"} id="1198:147"><span className={(styles['class-56'])}>Select type of Doctor </span><span className={(styles['class-57'])}>*</span></div>
                <div className={(styles['class-58']) + " class=Addyoursymtoms"} id="1198:148">Add your symtoms</div>
                <div className={(styles['class-59']) + " class=Name_Textbox"} id="1198:149">
                </div>
                <div className={(styles['class-60']) + " class=DOB_Textbox"} id="1198:150">
                </div><div className={(styles['class-61']) + " class=PleaseSelectyourDOB"} id="1198:151">Please Select your DOB  </div>
                <div className={(styles['class-62']) + " class=phone_textbox"} id="1198:152">
                </div><div className={(styles['class-63']) + " class=PleaseenterPhonenohere"} id="1198:153">Please enter Phone no  here</div>
                <div className={(styles['class-64']) + " class=Email_Textbox"} id="1198:154">
                </div><div className={(styles['class-65']) + " class=Pleaseenteremailidhere"} id="1198:155">Please enter email id  here</div>
                <div className={(styles['class-66']) + " class=Appointmentdat_Textbox"} id="1198:156">
                </div><div className={(styles['class-67']) + " class=Pleaseselectyourappointmentdate"} id="1198:157">Please select your appointment date</div>
                <div className={(styles['class-68']) + " class=Addsymtoms_Textbox"} id="1198:158">
                </div><div className={(styles['class-69']) + " class=Pleasetypeyoursymtoms"} id="1198:159">Please type your symtoms</div>
                <div className={(styles['class-70']) + " class=RadioBtn"} id="1198:160">
                    <div className={(styles['class-71']) + " class=scale option"} id="1198:161">
                        <div className={(styles['class-72']) + " class=radio - empty"} id="I1198:161;16:18801">
                            <div className={(styles['class-73']) + " class=Border"} id="I1198:161;16:18801;16:18792"></div>
                            <div className={(styles['class-74']) + " class=Center"} id="I1198:161;16:18801;16:18793"></div>
                        </div>
                    </div><div className={(styles['class-75']) + " class=Male"} id="1198:162">Male</div>
                    <div className={(styles['class-76']) + " class=scale option"} id="1198:163">
                        <div className={(styles['class-77']) + " class=radio - empty"} id="I1198:163;16:18801">
                            <div className={(styles['class-78']) + " class=Border"} id="I1198:163;16:18801;16:18792"></div>
                            <div className={(styles['class-79']) + " class=Center"} id="I1198:163;16:18801;16:18793"></div>
                        </div>
                    </div><div className={(styles['class-80']) + " class=Female"} id="1198:164">Female</div>
                    <div className={(styles['class-81']) + " class=scale option"} id="1198:165">
                        <div className={(styles['class-82']) + " class=radio - empty"} id="I1198:165;16:18801">
                            <div className={(styles['class-83']) + " class=Border"} id="I1198:165;16:18801;16:18792"></div>
                            <div className={(styles['class-84']) + " class=Center"} id="I1198:165;16:18801;16:18793"></div>
                        </div>
                    </div><div className={(styles['class-85']) + " class=Other"} id="1198:166">Other</div>
                </div>
                <div className={(styles['class-86']) + " class=dropdown"} id="1198:167">
                    <div
                        className={(styles['class-87']) + " class=Button"}
                        id="I1198:167;120:843"
                        onClick={() => handleClick('/State=Default')}
                    >
                        <div className={(styles['class-88']) + " class=Label"} id="I1198:167;120:844">General Physician</div>
                        <div className={(styles['class-89']) + " class=Icon"} id="I1198:167;120:845">
                            <div className={(styles['class-90']) + " class=Group"} id="I1198:167;120:846">
                                <div className={(styles['class-91']) + " class=Vector"} id="I1198:167;120:847">
                                    <svg height="6.0" viewBox="0 0 12.0 6.0" width="12.0" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.00 0.00L12.00 0.00L12.00 6.00L0.00 6.00Z" fill="transparent" stroke="rgba(153, 153, 153, 1.0)" strokeWidth="2.0"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(styles['class-92']) + " class=dropdown-default"} id="1198:168">
                    <div className={(styles['class-93']) + " class=Button"} id="I1198:168;289:90">
                        <div className={(styles['class-94']) + " class=Label"} id="I1198:168;289:91">Book your slot</div>
                        <div className={(styles['class-95']) + " class=Icon"} id="I1198:168;289:92">
                            <div className={(styles['class-96']) + " class=Group"} id="I1198:168;289:93">
                                <div className={(styles['class-97']) + " class=Vector"} id="I1198:168;289:94">
                                    <svg height="6.0" viewBox="0 0 12.0 6.0" width="12.0" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.00 0.00L12.00 0.00L12.00 6.00L0.00 6.00Z" fill="transparent" stroke="rgba(153, 153, 153, 1.0)" strokeWidth="2.0"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(styles['class-98']) + " class=Pleaseenternamehere"} id="1198:169">Please enter name  here</div>
                <div className={(styles['class-99']) + " class=date_range_duotone"} id="1198:170">
                    <div className={(styles['class-100']) + " class=Rectangle26"} id="I1198:170;0:332">
                    </div>
                    <div className={(styles['class-101']) + " class=Rectangle25"} id="I1198:170;0:333">
                    </div>
                    <div className={(styles['class-102']) + " class=Line1"} id="I1198:170;0:334">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-103']) + " class=Line2"} id="I1198:170;0:335">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-104']) + " class=Rectangle27"} id="I1198:170;0:336">
                    </div>
                    <div className={(styles['class-105']) + " class=Rectangle29"} id="I1198:170;0:337">
                    </div>
                    <div className={(styles['class-106']) + " class=Rectangle28"} id="I1198:170;0:338">
                    </div>
                    <div className={(styles['class-107']) + " class=Rectangle30"} id="I1198:170;0:339">
                    </div>
                </div>
                <div className={(styles['class-108']) + " class=date_range_duotone"} id="1198:171">
                    <div className={(styles['class-109']) + " class=Rectangle26"} id="I1198:171;0:332">
                    </div>
                    <div className={(styles['class-110']) + " class=Rectangle25"} id="I1198:171;0:333">
                    </div>
                    <div className={(styles['class-111']) + " class=Line1"} id="I1198:171;0:334">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-112']) + " class=Line2"} id="I1198:171;0:335">
                        <svg height="3.0" viewBox="0 0 0.0 3.0" width="0.0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.04 0.00L0.04 0.00L-0.04 3.00L-0.04 3.00Z" fill="transparent" stroke="rgba(34, 34, 34, 1.0)" strokeWidth="1.2000000476837158"></path>
                        </svg>
                    </div>
                    <div className={(styles['class-113']) + " class=Rectangle27"} id="I1198:171;0:336">
                    </div>
                    <div className={(styles['class-114']) + " class=Rectangle29"} id="I1198:171;0:337">
                    </div>
                    <div className={(styles['class-115']) + " class=Rectangle28"} id="I1198:171;0:338">
                    </div>
                    <div className={(styles['class-116']) + " class=Rectangle30"} id="I1198:171;0:339">
                    </div>
                </div>
                <div className={(styles['class-117']) + " class=Rectangle398935"} id="1198:225">
                </div>
                <div className={(styles['class-118']) + " class=Rectangle39918"} id="704:145">
                </div><div className={(styles['class-119']) + " class=Congratulations!"} id="704:146">Congratulations !</div><div className={(styles['class-120']) + " class=YourAppointmentisconfirmed"} id="676:125">Your Appointment is
 confirmed</div>
                <div className={(styles['class-121']) + " class=Backtohomebtn"} id="704:164">
                    <div className={(styles['class-122']) + " class=Group1000000969"} id="704:161">
                        <div className={(styles['class-123']) + " class=Rectangle39915"} id="704:162">
                        </div>
                    </div><div className={(styles['class-124']) + " class=BackToHome"}
                        id="704:163"
                        onClick={() => handleClick('/Homepage')}
                    >Back To Home</div>
                </div>
                <img className={(styles['class-3']) + " class=Logo"} id="I1198:125;120:561" src={logo_jpg} />
            </div>
        </>
    );
};

export default Popup;
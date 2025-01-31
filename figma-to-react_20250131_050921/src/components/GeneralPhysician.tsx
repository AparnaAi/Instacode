import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/GeneralPhysician.module.css';
import dricon_jpg from '../assets/dricon.jpg';
import drimg4_jpg from '../assets/drimg4.jpg';
import drimg2_jpg from '../assets/drimg2.jpg';
import rightarrow_jpg from '../assets/rightarrow.jpg';
import drimg1_jpg from '../assets/drimg1.jpg';
import logo_jpg from '../assets/logo.jpg';
import drimg3_jpg from '../assets/drimg3.jpg';

const GeneralPhysician: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (destination: string) => {
        navigate(`/${destination}`);
    };

    return (
        <>
            
<div className={(styles['class-0']) + " class=GeneralPhysician"} id="924:483">
<div className={(styles['class-1']) + " class=bground"} id="120:780">
</div>
<div className={(styles['class-2']) + " class=Header"} id="120:771">
</div>
<div className={(styles['class-3']) + " class=navigation"} id="120:773">
<div className={(styles['class-4']) + " class=Home"} id="120:774" onClick={() => handleNavigation('Homepage')}>Home </div>
<div className={(styles['class-5']) + " class=FindADoctor"} id="120:775" onMouseEnter={() => handleNavigation('FindADoctorPage')}>Find a Doctor</div>
<div className={(styles['class-6']) + " class=MyAppointment"} id="120:776">My Appointment</div>
</div>
<div className={(styles['class-7']) + " class=drlistcontainer"} id="120:781">
<div className={(styles['class-8']) + " class=Group1000000949"} id="120:782">
<div className={(styles['class-9']) + " class=Container"} id="120:783">
</div>
<div className={(styles['class-10']) + " class=Appointmentdate"} id="120:784">
<div className={(styles['class-11']) + " class=AppointmentDate*"} id="120:785"><span className={(styles['class-12'])}>Appointment Date</span><span className={(styles['class-13'])}>*</span></div>
</div>
</div>
</div>
<div className={(styles['class-14']) + " class=drcard1"} id="120:787">
<div className={(styles['class-15']) + " class=Group1000000949"} id="120:788">
<div className={(styles['class-16']) + " class=Container1"} id="120:789">
</div>
</div>
<div className={(styles['class-17']) + " class=dedetails"} id="120:790">
<div className={(styles['class-18']) + " class=Dr.Williamluthar"} id="120:791">Dr. William luthar</div><div className={(styles['class-19']) + " class=Generalphysician"} id="120:792">General physician</div><div className={(styles['class-20']) + " class=Bookanapppointment"} id="120:793">Book an apppointment</div><div className={(styles['class-21']) + " class=Address"} id="120:794">Address</div>
<img className={(styles['class-22']) + " class=dricon"} id="120:796" src={dricon_jpg}/>
</div>
</div>
<div className={(styles['class-23']) + " class=drcard3"} id="120:800">
<div className={(styles['class-24']) + " class=Group1000000949"} id="120:801">
<div className={(styles['class-25']) + " class=Container3"} id="120:802">
</div>
</div>
<div className={(styles['class-26']) + " class=Group1000000950"} id="120:803">
<div className={(styles['class-27']) + " class=Dr.JenniferWinget"} id="120:804">Dr. Jennifer Winget</div><div className={(styles['class-28']) + " class=Generalphysician"} id="120:805">General physician</div><div className={(styles['class-29']) + " class=Address"} id="120:806">Address</div>
<div className={(styles['class-30']) + " class=Group1000000958"} id="120:807">
<div className={(styles['class-31']) + " class=Bookanapppointment"} id="120:808">Book an apppointment</div>
</div>
<img className={(styles['class-32']) + " class=dricon"} id="120:810" src={dricon_jpg}/>
</div>
</div>
<div className={(styles['class-33']) + " class=drcard2"} id="120:813">
<div className={(styles['class-34']) + " class=drcard2"} id="120:814">
<div className={(styles['class-35']) + " class=Container2"} id="120:815">
</div>
</div>
<div className={(styles['class-36']) + " class=drdetails"} id="120:816">
<div className={(styles['class-37']) + " class=Dr.Martinguptil"} id="120:817">Dr. Martin guptil</div><div className={(styles['class-38']) + " class=Generalphysician"} id="120:818">General physician</div><div className={(styles['class-39']) + " class=Bookanapppointment"} id="120:819">Book an apppointment</div><div className={(styles['class-40']) + " class=Address"} id="120:820">Address</div>
<img className={(styles['class-41']) + " class=dricon"} id="120:822" src={dricon_jpg}/>
</div>
</div>
<div className={(styles['class-42']) + " class=drcard4"} id="120:826">
<div className={(styles['class-43']) + " class=decard4"} id="120:827">
<div className={(styles['class-44']) + " class=Container4"} id="120:828">
</div>
</div>
<div className={(styles['class-45']) + " class=drdetails"} id="120:829">
<div className={(styles['class-46']) + " class=Dr.Ronaldovince"} id="120:830">Dr. Ronaldo vince</div><div className={(styles['class-47']) + " class=Generalphysician"} id="120:831">General physician</div><div className={(styles['class-48']) + " class=Address"} id="120:832">Address</div>
<div className={(styles['class-49']) + " class=Group1000000959"} id="120:833">
<div className={(styles['class-50']) + " class=Bookanapppointment"} id="120:834">Book an apppointment</div>
</div>
<img className={(styles['class-51']) + " class=dricon"} id="120:836" src={dricon_jpg}/>
</div>
</div><div className={(styles['class-52']) + " class=Generalphysician"} id="134:1040">General physician</div>
<img className={(styles['class-53']) + " class=rightarrow"} id="194:165" src={rightarrow_jpg} onClick={() => handleNavigation('FormdrGeneralPhy')}/>
<img className={(styles['class-54']) + " class=rightarrow"} id="194:166" src={rightarrow_jpg} onClick={() => handleNavigation('FormdrGeneralPhy')}/>
<img className={(styles['class-55']) + " class=rightarrow"} id="194:168" src={rightarrow_jpg} onClick={() => handleNavigation('FormdrGeneralPhy')}/>
<img className={(styles['class-56']) + " class=rightarrow"} id="194:167" src={rightarrow_jpg} onClick={() => handleNavigation('FormdrGeneralPhy')}/>
<img className={(styles['class-57']) + " class=drimg4"} id="213:523" src={drimg4_jpg}/>
<img className={(styles['class-58']) + " class=drimg2"} id="213:525" src={drimg2_jpg}/>
<img className={(styles['class-59']) + " class=drimg1"} id="213:524" src={drimg1_jpg}/>
<img className={(styles['class-60']) + " class=drimg3"} id="213:526" src={drimg3_jpg}/>
<img className={(styles['class-61']) + " class=logo"} id="1481:187" src={logo_jpg}/>
</div>

        </>
    );
};

export default GeneralPhysician;
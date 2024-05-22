import  { useState } from 'react';
import './SignUp.css';
import { AppleButton, FacebookButton, GoogleButton, LoginButton } from '../../Components/index';
import cityview from '../../assets/images/AmazingAerialShotSingaporeCityscapeWithLotsSkyscrapers.jpeg'
import {Link} from 'react-router-dom'
const SignUp = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [personalID, setPersonalID] = useState(null);

  const handleProfileImageUpload = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlePersonalIDUpload = (e) => {
    setPersonalID(URL.createObjectURL(e.target.files[0]));
  };

  return (
    
    <div className="sign-up-container">
        <img className='imgww' src={cityview} alt="City view" />
      <div className="form-container">
        <h1>إنشاء حساب</h1>
        <div className="form-content">
          <div className="drag-drop-areas">
            <div className="drag-drop-area">
              <input type="file" id="profileImage" onChange={handleProfileImageUpload} />
              <label htmlFor="profileImage">
                اسحب و أفلت الصورة هنا أو قم برفعها من الملفات
                <br />
                <span> 2MB:الحجم الاقصى</span>
              </label>
            </div>
            <div className="drag-drop-area">
              <input type="file" id="personalID" onChange={handlePersonalIDUpload} />
              <label htmlFor="personalID">
                اسحب و أفلت الصورة هنا أو قم برفعها من الملفات
                <br />
                <span> 1MB:الحجم الاقصى</span>
              </label>
            </div>
            <button className="submit-button">إنشاء حساب</button>

          </div>
          <div className="form-fields">
            <input type="email" placeholder="الإيميل" className="input-field" />
            <input type="text" placeholder="اسم المستخدم" className="input-field" />
            <input type="tel" placeholder="رقم الهاتف" className="input-field" />
            <input type="password" placeholder="كلمة المرور" className="input-field" />
            <input type="password" placeholder="تأكيد كلمة المرور" className="input-field" />
          </div>
        </div>
        <p>
          لديك حساب؟ <Link to="/login">تسجيل الدخول</Link>
        </p>
        <span>أو</span>
        <div className="social-buttons">
<GoogleButton/>
<FacebookButton/>
<AppleButton/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

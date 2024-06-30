import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استبدال useHistory بـ useNavigate
import './SignUp.css';
import { AppleButton, FacebookButton, GoogleButton, LoginButton } from '../../Components/index';
import cityview from '../../assets/images/AmazingAerialShotSingaporeCityscapeWithLotsSkyscrapers.jpeg';
import { Link } from 'react-router-dom';
import signupphoto from '../../assets/images/Animate.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

const SignUp = () => {
  const navigate = useNavigate(); // استخدام useNavigate بدلاً من useHistory
  const [loadingsignup, Setloadingsignup] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [personalID, setPersonalID] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      Setloadingsignup(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleProfileImageUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handlePersonalIDUpload = (e) => {
    setPersonalID(e.target.files[0]);
  };

  const handleSignUp = () => {
    const formdata = new FormData();
    formdata.append("profile_photo", profileImage);
    formdata.append("certificate", personalID);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("password", password);
    formdata.append("password_confirmation", passwordConfirmation);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://task5-toleen-falion.trainees-mad-s.com/api/auth/Signup", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === true) {
          navigate('/Verify', { state: { name, email } });
          console.log(result);
        } else {
          console.log(result.errors);
          alert('please confirm that data you entered is correct');
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <motion.div
      className="sign-up-container"
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
    >
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
                اسحب و أفلت البي دي اف هنا أو قم برفعه من الملفات
                <br />
                <span> 1MB:الحجم الاقصى</span>
              </label>
            </div>
            <button className="submit-button" onClick={handleSignUp}>إنشاء حساب</button>
          </div>
          <div className="form-fields">
            <input type="email" placeholder="الإيميل" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="اسم المستخدم" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="tel" placeholder="رقم الهاتف" className="input-field" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="password" placeholder="كلمة المرور" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="تأكيد كلمة المرور" className="input-field" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </div>
        </div>
        <p>
          لديك حساب؟ <Link to="/login">تسجيل الدخول</Link>
        </p>
        <span>أو</span>
        <div className="social-buttons">
          <GoogleButton />
          <FacebookButton />
          <AppleButton />
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;

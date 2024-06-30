import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingphoto from '../../assets/images/signin.json';
import './Login.css';
import backgroundImage from '../../assets/images/analog-landscape-city-with-buildings.jpeg';
import { AppleButton, FacebookButton, GoogleButton, LoginButton } from '../../Components/index';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [loading, setloading] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { name} = location.state || { name: ''};

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("password", password);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://task5-toleen-falion.trainees-mad-s.com/api/auth/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === true) {
          navigate('/Verifacation', { state: { name, email } });
        } else {
          setErrorMessage('اسم المستخدم أو كلمة المرور خاطئة يرجى التاكد');
          console.log(result.message);
        }
      })
      .catch(error => {
        console.log('error', error);
        setErrorMessage('حدث خطأ أثناء محاولة تسجيل الدخول. يرجى المحاولة مرة أخرى لاحقاً.');
      });
  };

  return (
    <>
      <div className='body'>
        <motion.div
          className="login-container"
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100vw' }}
          transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
        >
          <div className="image-section">
            <img src={backgroundImage} alt="Background" className="background-image" />
          </div>
          <div className="form-section">
            <h2>تسجيل الدخول</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form>
              <input
                type="email"
                placeholder="الإيميل"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="input-field"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="password"
                placeholder="كلمة المرور"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <button type="submit" className="login-button" onClick={handleLogin}>تسجيل الدخول</button>
            <div className="options">
              <a href="#" className="forgot-password">نسيت كلمة المرور</a>
              <span> | </span>
              <Link to="/SignUp" className="create-account">إنشاء حساب</Link>
            </div>
            <div className="social-login">
              <span>أو</span>
              <div className="social-buttons">
                <GoogleButton />
                <AppleButton />
                <FacebookButton />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;

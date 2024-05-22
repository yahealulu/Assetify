import React from 'react';
import './Login.css';
import backgroundImage from '../../assets/images/analog-landscape-city-with-buildings.jpeg';
import { AppleButton, FacebookButton, GoogleButton, LoginButton } from '../../Components/index';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='body'>
<div className="login-container">
      <div className="image-section">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
      <div className="form-section">
        <h2>تسجيل الدخول</h2>
        <form>
          <input type="text" placeholder="الإيميل أو رقم الهاتف" className="input-field" />
          <input type="password" placeholder="كلمة المرور" className="input-field" />
        </form>
        <LoginButton/>
        <div className="options">
          <a href="#" className="forgot-password">نسيت كلمة المرور</a>
          <span> | </span>
          <Link to="/SignUp" className="create-account">إنشاء حساب</Link>
        </div>
        <div className="social-login">
          <span>أو</span>
          
          <div className="social-buttons">
    <GoogleButton/>    <AppleButton/>   <FacebookButton/>  
          </div>

        </div>
      </div>
    </div>
    </div>  
    
  );
};

export default Login;

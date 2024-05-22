// src/Components/Buttons/Buttons.jsx
import React, { useState } from 'react';
import './Buttons.css';
import AppleLogo from '../../assets/images/Apple Logo.svg';
import GoogleLogo from '../../assets/images/LogoGoogle.svg';
import FacebookLogo from '../../assets/images/Facebook Logo.svg';
import Popup from '../popup/popup';
import {Link} from 'react-router-dom'


const Buttons = (props) => {
  return (
    <div className='Buttons'>{props.children}</div>
  );
}

const SignButton = () => {
  return (
    <Link to='/Login'>
      <button className="signButton">سجل الدخول</button>
    </Link>
  );
}

const SignOutButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSignOutClick = () => {
    setIsPopupVisible(true);
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <button className="signButton" onClick={handleSignOutClick}>تسجيل الخروج</button>
      {isPopupVisible && (
        <Popup
          message="هل انت متأكد من تسجيل الخروج؟"
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

const Start = () => {
  return (
    <Link to='/SignUp'>
      <button className="start">ابدأ</button>
    </Link>
  );
}

const GoogleButton = () => {
  return (
    <Link to='https://www.google.com'>
      <button className="google-login">
        <img src={GoogleLogo} alt="Google" />
        <div className='sm'>Google</div>
      </button>
    </Link>
  );
}

const AppleButton = () => {
  return (
    <Link to='https://www.apple.com'>
      <button className="apple-login">
        <img src={AppleLogo} alt="Apple" />
        <div className='sm'>Apple</div>
      </button>
    </Link>
  );
}

const FacebookButton = () => {
  return (
    <Link to='https://www.facebook.com'>
      <button className="facebook-login">
        <img src={FacebookLogo} alt="Facebook" />
        <div className='sm'>Facebook</div>
      </button>
    </Link>
  );
}

const LoginButton = () => {
  return (
    <Link to='/HomeSignedIp'>
      <button type="submit" className="login-button">تسجيل الدخول</button>
    </Link>
  );
}

export default Buttons;
export { SignButton, Start, LoginButton, GoogleButton, AppleButton, FacebookButton, SignOutButton };

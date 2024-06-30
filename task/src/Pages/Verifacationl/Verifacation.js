import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Verivacation.css';

const Verifacation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || { name: '', email: '' };
  const [code, setCode] = useState(new Array(6).fill(""));
  const [resendMessage, setResendMessage] = useState("");
  const [isloggedin, setisloggedin] = useState(false);

  const handleChange = (element, index) => {
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    if (!isNaN(element.value) && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleConfirm = () => {
    const verificationCode = code.join('');
    const formdata = new FormData();
    formdata.append("code", verificationCode);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://task5-toleen-falion.trainees-mad-s.com/api/auth/verifyEemail", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === true) {
          console.log("Account verified successfully");
          console.log("Token:", result.token);
          setisloggedin(true);
          localStorage.setItem('authToken', result.token);
          navigate('/', { state: { isloggedin: true } });
        } else {
          console.log("Verification failed:", result.message);
          setResendMessage(result.message);
        }
      })
      .catch(error => console.log('error', error));
  };

  const handleResend = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://task5-toleen-falion.trainees-mad-s.com/api/auth/re_sentVerifyEemail", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === true) {
          setResendMessage("تم إعادة إرسال الرمز، يرجى التحقق من صندوق البريد");
        } else {
          setResendMessage("حدث خطأ أثناء إعادة الإرسال، حاول مرة أخرى");
        }
      })
      .catch(error => {
        console.log('error', error);
        setResendMessage("حدث خطأ أثناء إعادة الإرسال، حاول مرة أخرى");
      });
  };

  return (
    <div className="verify-container">
      <div className="image-overlay"></div>
      <div className="verify-box">
        <h2 className="welcome-text">مرحبا بك {name}</h2>
        <p className="instruction-text">لقد تم ارسال رمز التأكيد الى: <span className="email-text">({email})</span></p>
        <div className="input-container">
          {code.map((data, index) => {
            return (
              <input
                className="code-input"
                type="text"
                name="code"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <button className="confirm-button" onClick={handleConfirm}>تأكيد</button>
        <div className="resend-container">
          <p className="resend-instruction">اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد <span className="timer">4:20</span></p>
          <button className="resend-button" onClick={handleResend}>اعادة الارسال</button>
          {resendMessage && <p className="resend-message">{resendMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Verifacation;

import { useState } from 'react';
import './popup.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Popup = ({ message, onCancel }) => {
  const [email, setEmail] = useState('');
  const [remessage, setRemessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      redirect: 'follow'
    };

    fetch("https://task5-toleen-falion.trainees-mad-s.com/api/auth/logout", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === true) {
          localStorage.removeItem('authToken');
          navigate('/', { state: { isloggedin: false } });
        } else {
          console.log(result.message);
        }
      })
      .catch(error => console.log('error', error));
  };

  const deleteAccount = () => {
    var formdata = new FormData();
    formdata.append("email", email);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://task5-toleen-falion.trainees-mad-s.com/api/auth/DeleteUserAccount", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === true) {
          console.log(result);
          setRemessage('The account has been deleted successfully');
        } else {
          setRemessage('Account not found');
        }
      })
      .catch(error => {
        console.log('error', error);
        setRemessage('An error occurred while trying to delete the account');
      });
  };

  return (
    <div className="popup-overlay">
      <img className='backimg'></img>
      <div className="popup-content">
        <h3>{message}</h3>
        <div className="popup-buttons">
          <button className="confirm-button" onClick={handleLogout}>تأكيد</button>
          <button className="cancel-button" onClick={onCancel}>تراجع</button>
          <input
            type='text'
            className='input-fieldemail'
            value={email}
            placeholder='enter email to delete it'
            onChange={e => setEmail(e.target.value)}
          />
          <button className="delete-button" onClick={deleteAccount}>حذف الحساب</button>
          {remessage}
        </div>
      </div>
    </div>
  );
};

export default Popup;

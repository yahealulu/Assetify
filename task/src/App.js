import './App.css';
import { Login, SignUp, HomeSignedin, Home, Verify } from './Pages/index';
import Routers from './Routers';
import { Container } from './Sections/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const refreshToken = () => {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        fetch("https://task5-toleen-falion.trainees-mad-s.com/api/auth/refreshToken", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status === true) {
              localStorage.setItem('authToken', result.token);
            } else {
              localStorage.removeItem('authToken');
            }
          })
          .catch(error => console.log('error', error));
      };

      const intervalId = setInterval(refreshToken, 15 * 60 * 1000); // Refresh every 15 minutes
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <Router>
      <Container>
        <Routers />
      </Container>
    </Router>
  );
}

export default App;

import './App.css'
import { Home } from './Pages/index';
import {Login, SignUp,HomeSignedin } from './Pages/index';
import {Container } from './Sections/index';
import { BrowserRouter as Router ,Route ,Routes}  from 'react-router-dom'
function App() {
  return (
 <Router>
      <Container>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/HomeSignedIp' element={<HomeSignedin/>}/>

  </Routes>
   </Container>
 </Router>
      
  

  );
}

export default App;


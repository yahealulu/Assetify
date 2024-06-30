import {Route ,Routes, useLocation}  from 'react-router-dom'
import {Login, SignUp,HomeSignedin ,Home,Verify} from './Pages/index';
import {AnimatePresence } from "framer-motion"
import Verifacation from './Pages/Verifacationl/Verifacation';
const Routers = () => {
    const loacation =useLocation();
  return (
    <AnimatePresence>
    <Routes loacation={loacation} key={loacation.pathname}>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/HomeSignedIp' element={<HomeSignedin/>}/>
    <Route path='/Verify' element={<Verify/>}/>
    <Route path='/Verifacation' element={<Verifacation/>}/>
  </Routes>
    </AnimatePresence>

  ) 
}

export default Routers
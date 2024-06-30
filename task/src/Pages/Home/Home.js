import './Home.css';
import { Body, Footer, Header, NHeader } from '../../Sections/index';
import { Bodycontent } from '../../Components';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();
  const isloggedin = location.state?.isloggedin || false;

  return (
    <>
      {isloggedin ? <NHeader /> : <Header />}
      <Body>
        <Bodycontent /> 
      </Body>
      <Footer /> 
    </>
  )
}

export default Home;

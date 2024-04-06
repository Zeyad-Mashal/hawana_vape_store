import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/About Us/AboutUs';
import Banner1 from './components/Banner1/Banner1';
import Show from './components/ShowRoom/Show';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import InfoData from './components/Info/InfoData';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutUs />
      <Banner1 />
      <InfoData />
      <Show />
      <Contact />
      <Footer />
      <div className='fixed_contact'>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </div>
  );
}

export default App;

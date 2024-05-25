import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Vape from './components/VapePage/Vape';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/Prodcut Details/ProductDetails';
import SubCategory from './components/SubCategory/SubCategory';
// import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vape/:subCategoryID' element={<Vape />} />
        <Route path='/subCategory/:categoryID' element={<SubCategory />} />
        <Route path='/productDetails/:productID' element={<ProductDetails />} />
      </Routes>

      <div className='fixed_contact'>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </div>
  );
}

export default App;

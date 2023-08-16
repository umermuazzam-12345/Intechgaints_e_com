import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Addproduct from './components/Addproduct';
import Contact from './components/Contact';
import About from './components/About/About';
import DeleteProducts from './components/DeleteProducts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDetails />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/addproduct' element={<Addproduct />} />
          <Route path='/dashboard/delete' element={<DeleteProducts />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

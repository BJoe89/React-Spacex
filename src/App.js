import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Section1/>} />
        <Route path='/starlink' element={<Section1/>} />
        <Route path='/starship' element={<Section2/>} />
        <Route path='/lunar-exporation' element={<Section4/>} />
      </Routes>

        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
    </BrowserRouter>
  );
}

export default App;

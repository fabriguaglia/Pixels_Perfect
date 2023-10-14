import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/about/about';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header';
import Home from './components/home/home';
import Profile from "./components/log/Profile.js";
import Products from './components/products/products';
import AmongUsSprite from './components/products/productos-por-separado/AmongUsSprite';
import FoxSprite from './components/products/productos-por-separado/FoxSprite';
import GangsterSprite from './components/products/productos-por-separado/GangsterSprite';
import LarioSprite from './components/products/productos-por-separado/LarioSprite';
import WarriorSprite from './components/products/productos-por-separado/WarriorSprite';

import AvatarSprite from './components/products/productos-por-separado/AvatarSprite';
import BearmanSprite from './components/products/productos-por-separado/BearManSprite';
import BeisbolSprite from './components/products/productos-por-separado/BeisbolSprite';
import QuimicoSprite from './components/products/productos-por-separado/Cientifico2Sprite';
import CientificoSprite from './components/products/productos-por-separado/CientificoSprite';
import EmpresarioSprite from './components/products/productos-por-separado/EmpresarioSprite';
import FutbolSprite from './components/products/productos-por-separado/FutbolSprite';
import GolfSprite from './components/products/productos-por-separado/GolfSprite';
import GuardianSprite from './components/products/productos-por-separado/GuardianSprite';
import MonoSprite from './components/products/productos-por-separado/MonoSprite';
import MuñecoSprite from './components/products/productos-por-separado/MuñecoSprite';
import PerroSprite from './components/products/productos-por-separado/PerroSprite';
import PirataSprite from './components/products/productos-por-separado/PirataSprite';
import PoliciaSprite from './components/products/productos-por-separado/PoliciaSprite';
import TenisSprite from './components/products/productos-por-separado/TenisSprite';
import UndertaleSprite from './components/products/productos-por-separado/UndertaleSprite';
import ContactUs from './components/contact/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' element={ <AboutUs /> } />
        <Route path='/perfil' element={ <Profile /> } />
        <Route path='/contact' element={ <ContactUs /> } />
        <Route exact path="/products" element={<Products />}/>
          <Route path="/products/among-sprite" element={<AmongUsSprite />}/>
          <Route path="/products/foxSprite" element={<FoxSprite />}/>
          <Route path="/products/gangster-sprite" element={<GangsterSprite />}/>
          <Route path="/products/lario-sprite" element={<LarioSprite />}/>
          <Route path="/products/warrior-sprite" element={<WarriorSprite />}/>
          <Route path="/products/avatar-sprite" element={<AvatarSprite />}/>
          <Route path="/products/bearman-sprite" element={<BearmanSprite />}/>
          <Route path="/products/beisbol-sprite" element={<BeisbolSprite />}/>
          <Route path="/products/quimico-sprite" element={<QuimicoSprite />}/>
          <Route path="/products/cientifico-sprite" element={<CientificoSprite />}/>
          <Route path="/products/empresario-sprite" element={<EmpresarioSprite />}/>
          <Route path="/products/futbol-sprite" element={<FutbolSprite />}/>
          <Route path="/products/golf-sprite" element={<GolfSprite />}/>
          <Route path="/products/guardian-sprite" element={<GuardianSprite />}/>
          <Route path="/products/mono-sprite" element={<MonoSprite />}/>
          <Route path="/products/muñeco-sprite" element={<MuñecoSprite />}/>
          <Route path="/products/perro-sprite" element={<PerroSprite />}/>
          <Route path="/products/pirata-sprite" element={<PirataSprite />}/>
          <Route path="/products/policia-sprite" element={<PoliciaSprite />}/>
          <Route path="/products/tenis-sprite" element={<TenisSprite />}/>
          <Route path="/products/undertale-sprite" element={<UndertaleSprite />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

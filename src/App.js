import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/about/about';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header';
import Home from './components/home/home';
import Profile from "./components/log/Profile.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' element={ <AboutUs /> } />
        <Route path='/perfil' element={ <Profile /> } />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

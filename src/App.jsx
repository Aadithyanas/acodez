import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage"
import Menu from './components/Menu';
import AboutPage from './components/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />  {/* Home page */}
        <Route path="/menu" element={<Menu />} />  {/* Menu page */}
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

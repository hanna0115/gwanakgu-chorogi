import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Loding from './device/MobileVer/Loding';
import Header from './device/MobileVer/Header';
import Footer from './device/MobileVer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main><Outlet/></main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

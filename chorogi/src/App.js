import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Loding from './component/MobileVer/Loding';
import Header from './component/MobileVer/Header';
import Footer from './component/MobileVer/Footer';

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

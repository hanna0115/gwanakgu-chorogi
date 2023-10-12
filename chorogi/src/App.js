import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Loding from './component/MobileVer/Loding';
import Header from './component/MobileVer/Header';
import Main from './component/MobileVer/Main';
import Footer from './component/MobileVer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

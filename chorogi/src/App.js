import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/DesktopVer/Header';
import HomePage from './component/DesktopVer/HomePage';
import Footer from './component/DesktopVer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

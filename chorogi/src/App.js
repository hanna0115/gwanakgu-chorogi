import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Loding from './component/Mobile/Loding';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loding/>
      </div>
    </BrowserRouter>
  );
}

export default App;

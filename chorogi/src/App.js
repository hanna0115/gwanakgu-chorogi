import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import Nav from './component/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage/>
      </div>
    </BrowserRouter>
  );
}

export default App;

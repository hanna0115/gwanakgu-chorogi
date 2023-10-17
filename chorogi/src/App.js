// import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import MobilePage from './MobilePage';


function App() {
  return (
    <div className="App">
      <BrowserView>
        데스크톱브라우져!
        <MobilePage/>
      </BrowserView>
      <MobileView>
      </MobileView>
    </div>
  );
}

export default App;

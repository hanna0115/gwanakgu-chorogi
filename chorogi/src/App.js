import { BrowserView, MobileView } from 'react-device-detect';
import MobilePage from './device/MobileVer/MobilePage';
import Loding from './device/MobileVer/page/Loding';


function App() {
  return (
    <div className="App">
      <BrowserView>
      <Loding/>
      <MobilePage/>
      </BrowserView>
      <MobileView>
     
      </MobileView>
    </div>
  );
}

export default App;

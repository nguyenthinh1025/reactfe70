import logo from './logo.svg';

import HandleEventRcc from './EventHandler/HandleEventRcc';
import LoginForm from './EventHandler/LoginForm';
import BaiTapChonXe from './StateDemo/BaiTapChonXe/BaiTapChonXe';
import BaiTapTangGiamFont from './StateDemo/BaiTapTangGiamFont/BaiTapTangGiamFont';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App () {
  return (
    <div className="App">
      <RenderWithMap />
    </div>
  );
}

export default App;

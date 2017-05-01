import redux, {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import RootView from 'itemDetail/component/RootView.jsx'
import appReducer from 'itemDetail/reducer/appReducer.js'
import DevTool from 'common/component/devtool'

import './assets/css/itemDetail.scss';



var enhancer = DevTool.instrument();
var store = createStore(appReducer, enhancer);
var app = ReactDOM.render(
    <Provider store={store}>
    <div>
      <RootView />
      {__DEV__ && DEV_TOOL && <DevTool />}
    </div>
    </Provider>,
    document.getElementById('root')
);

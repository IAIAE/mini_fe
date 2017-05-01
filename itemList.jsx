import redux, {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import promiseMiddleware from 'redux-promise'
import RootView from 'itemList/component/RootView.jsx'
import appReducer from 'itemList/reducer/appReducer.js'
// import DevTool from 'common/component/devtool.jsx'
import './assets/css/itemList.scss';

import 'whatwg-fetch'


// var enhancer = DevTool.instrument();
var store = createStore(appReducer, applyMiddleware(promiseMiddleware));
var app = ReactDOM.render(
    <Provider store={store}>
    <div>
      <RootView />
    </div>
    </Provider>,
    document.getElementById('root')
);

    // {__DEV__ && DEV_TOOL && <DevTool />}
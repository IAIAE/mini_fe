import {combineReducers} from 'redux';
import {takeWhileTrue} from '../util/sugar.js';
import {itemSetCase} from './cases/itemCase.js'
import { fetchingCase, fetchFailCase, fetchSuccess} from './cases/pageFetchingCases.js'
import CONSTANT from '../util/constant.js'


var item = (state = CONSTANT.defaultItem, action) => {
    var nextState = takeWhileTrue(
        itemSetCase
        )(state, action);
    return nextState === false?state:nextState;
};
var fetching = (state = 'init', action) => {
    var nextState = takeWhileTrue(
        fetchingCase,
        fetchFailCase,
        fetchSuccess
    )(state, action);
    return nextState === false? state: nextState;
}

var appReducer = combineReducers({
    fetching,
    item
});
export default appReducer;
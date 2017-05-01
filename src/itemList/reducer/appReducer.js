import {combineReducers} from 'redux';
import {takeWhileTrue} from '../util/sugar.js';
import {listSetAllCase, listSetCase} from './cases/itemListCases.js'
import { fetchingCase, fetchFailCase, fetchSuccess} from './cases/pageFetchingCases.js'
import CONSTANT from '../util/constant.js'


var itemList = (state = CONSTANT.defaultList, action) => {
    var nextState = takeWhileTrue(
        listSetAllCase,
        listSetCase
        )(state, action);
    return nextState === false?state:nextState;
};
var fetching = (state = 'init', action) => {
    var nextState = takeWhileTrue(
        fetchingCase,
        fetchFailCase,
        fetchSuccess
    )(state, action);
    return nextState = false? state: nextState;
}

var appReducer = combineReducers({
    fetching,
    itemList
});
export default appReducer;
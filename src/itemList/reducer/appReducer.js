import {combineReducers} from 'redux';
import {takeWhileTrue} from '../util/sugar.js';
import {listSetAllCase, listSetCase} from './cases/itemListCases.js'
import CONSTANT from '../util/constant.js'


var itemList = (state = CONSTANT.defaultList, action) => {
    var nextState = takeWhileTrue(
        listSetAllCase,
        listSetCase
        )(state, action);
    return nextState === false?state:nextState;
};

var appReducer = combineReducers({
    itemList
});
export default appReducer;
import {FETCHING, FETCH_FAIL, SET_ITEM_LIST_ALL} from '../../action/itemListAction.js'
import {actionTypeIn, actionTypeIs} from '../actionType.js';

var fetchingCase = (state, action)=>{
    return actionTypeIs(action.type, FETCHING) && 'fetching';
}
var fetchFailCase = (state, action)=>{
    return actionTypeIs(action.type, FETCH_FAIL) && 'fail';
}

var fetchSuccess = (state, action) => {
    return actionTypeIs(action.type, SET_ITEM_LIST_ALL) && 'success';
}

// var inputValueCase = (state, action) => {
//     return action.type === 'updateInput' && action.payload;
// }


export {
    fetchingCase,
    fetchFailCase,
    fetchSuccess
}



import {SET_ITEM_LIST_ALL, SET_ITEM} from '../../action/itemListAction.js'
import {actionTypeIn, actionTypeIs} from '../actionType.js';
import {listItemReducer} from '../reducers/itemList/itemReducer.js';

var listSetAllCase = (state, action)=>{
    return actionTypeIs(action.type, SET_ITEM_LIST_ALL) && [...action.payload.itemList];
}
var listSetCase  = (state, action)=>{
    if(actionTypeIn(action.type, SET_ITEM)){
        var nextState = [...state];
        // console.info(action.payload)
        nextState[action.index] = listItemReducer(state[action.index], action);
        return nextState;
    }else{
        return false;
    }
}

// var inputValueCase = (state, action) => {
//     return action.type === 'updateInput' && action.payload;
// }


export {
    listSetAllCase,
    listSetCase
}



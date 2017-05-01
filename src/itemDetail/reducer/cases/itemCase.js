import {SET_ITEM} from '../../action/itemAction.js'
import {actionTypeIn, actionTypeIs} from '../actionType.js';

var itemSetCase = (state, action)=>{
    return actionTypeIs(action.type, SET_ITEM) && action.payload;
}

// var inputValueCase = (state, action) => {
//     return action.type === 'updateInput' && action.payload;
// }


export {
    itemSetCase
}



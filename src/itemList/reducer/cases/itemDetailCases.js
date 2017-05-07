import {SHOW_ITEM_DETAIL_PANEL, CLOSE_ITEM_DETAIL_PANEL} from '../../action/showItemDetailAction.js'
import {actionTypeIn, actionTypeIs} from '../actionType.js';

var openCase = (state, action)=>{
    return actionTypeIs(action.type, SHOW_ITEM_DETAIL_PANEL) && action.payload;
}
var closeCase  = (state, action)=>{
    return actionTypeIs(action.type, CLOSE_ITEM_DETAIL_PANEL) && null;
}

// var inputValueCase = (state, action) => {
//     return action.type === 'updateInput' && action.payload;
// }


export {
    openCase,
    closeCase
}



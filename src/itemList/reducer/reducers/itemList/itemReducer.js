import {combineReducers} from 'redux'
import {SET_ITEM} from 'itemList/action/itemListAction.js';

var actionCreator = (creator) => (type) => (state='',action)=>{
    if(action.type === type){
        return creator(state,action);
    }else{
        return state;
    }
}
var plainActionCreator = actionCreator((state, action)=>{
    return action.payload;
});
var name = plainActionCreator(SET_ITEM+'/setName'),
    desc = plainActionCreator(SET_ITEM+'/setDesc'),
    status = plainActionCreator(SET_ITEM+'/setStatus'),
    imgsrc = plainActionCreator(SET_ITEM+'/setImg');
// var age = actionCreator((state,action)=>(+state)+1)('processList/increaseAge')

var itemListReducer = combineReducers({
    name,
    desc,
    status,
    imgsrc
});

export {
    itemListReducer
}
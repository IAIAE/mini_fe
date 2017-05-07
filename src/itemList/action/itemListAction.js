export const SET_ITEM_LIST_ALL = 'SET_ITEM_LIST_ALL'
export const SET_ITEM = 'SET_ITEM'
export const FETCHING = 'FETCHING'
export const FETCH_FAIL = 'FETCH_FAIL'

import CONSTANT from '../util/constant.js'

export function getItemListAction(dispatch,type){
    return new Promise((done, notDone)=>{
        dispatch({
            type: FETCHING,
        })
        fetch(CONSTANT.listCGI + '?type=' + type, {
            credentials: 'include',
            headers: {
                'kookie': document.cookie
            }
        })
        .then(response=>response.json())
        .then(json=>{
          done({
            type: SET_ITEM_LIST_ALL,
            payload: json
          })
        })
        .catch(err=>{
            console.log(err);
            dispatch({
                type: FETCH_FAIL
            })
        })
    })
}
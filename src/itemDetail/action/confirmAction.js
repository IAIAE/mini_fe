export const SET_ITEM = 'SET_ITEM'
export const FETCHING = 'FETCHING'
export const FETCH_FAIL = 'FETCH_FAIL'

import CONSTANT from '../util/constant.js'

export function confirmAction(dispatch, id){
    return new Promise((done, notDone)=>{
        dispatch({
            type: FETCHING
        })
        fetch(CONSTANT.confirmCGI+'?itemId='+id,{
            credentials: 'include',
            headers: {
                'kookie': document.cookie
            }
        })
        .then(response=>response.json())
        .then(json=>{
          done({
            type: SET_ITEM,
            payload: json
          })
        })
        .catch(err=>{
            dispatch({
                type: FETCH_FAIL
            })
        })
    })
}
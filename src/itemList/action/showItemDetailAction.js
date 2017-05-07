export const SHOW_ITEM_DETAIL_PANEL = 'SHOW_ITEM_DETAIL_PANEL'
export const CLOSE_ITEM_DETAIL_PANEL = 'CLOSE_ITEM_DETAIL_PANEL'
import {FETCHING, FETCH_FAIL} from './itemListAction.js'
import CONSTANT from '../util/constant.js'

export function showItemDetailAction(dispatch, itemId){
    return new Promise((done, notDone)=>{
        dispatch({
            type: FETCHING,
        })
        fetch(CONSTANT.itemCGI + '?itemId=' + itemId+'&type=2', {
            credentials: 'include',
            headers: {
                'kookie': document.cookie
            }
        })
        .then(response=>response.json())
        .then(json=>{
          console.info(json)
          done({
            type: SHOW_ITEM_DETAIL_PANEL,
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

export function closeItemDetailActioin(dispatch, itemId){
    return {
      type: CLOSE_ITEM_DETAIL_PANEL,
      payload: null
    };
}


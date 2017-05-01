


export const SET_ITEM_LIST_ALL = 'SET_ITEM_LIST_ALL'
export const SET_ITEM = 'SET_ITEM'
export const FETCHING = 'FETCHING'

export function getItemListAction(dispatch){
    return new Promise((done, notDone)=>{
        dispatch({
            type: FETCHING
        })
        fetch('test.com/test.json')
        .then(response=>response.json())
        .then(done)
        .catch(err=>{
            dispatch({
                type: FETCH_FAIL
            })
        })
    })
}
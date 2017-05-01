# how-to
```
npm install
npm run itemlist  # for itemlist page
npm run itemdetail # for itemDetail page
```

# 异步调用
异步调用全部用redux-promise来完成就行了。ajax模块用的fetch。

# reducer的写法
just for mini. FYI

```javascript
// for a store structure below:
var store = {
    name:{
        firstName:'',
        lastName:''
    },
    age: 12,
    detail:{
        payList:[
            {
                time:'',
                money:'',
                whichBank:''
            }
        ]
    }
}
```
a reducer structure will be designed like below:
```javascript 
var appReducer = combineReducers({
    name: nameReducer,
    age: ageReducer,
    detail: detailReducer
});

/**
 * nameReducer
 */
var nameReducer = combineReducer({
    firstName: firstNameReducer,
    lastName: lastNameReducer
});

/**
 * firstNameReducer
 * takeWhileTrue return the first case that return is not false. if all the case not match, takeWhileTrue will return false also.
 */
var firstNameReducer = (state='', action) => {
    return takeWhileTrue(firstNameCase)(state, action) || state;
} 

/**
 * firstNameCase
 * the action is preciated a SFA but not nessary.
 * a Case determin whether a action is in it's case, if ture return nextState, otherwise return false
 */
var firstNameCase = (state, action) => {
    return (actionTypeIs(action.type, 'setFirstName')) && action.payload;
} 
```

how to deal with the list-like data? such as the `payList` in `store`. what if there a complex data in a array?
```javascript
var payListReducer = (state=[], action) => {
    return takeWhileTrue(wholeListCase, listItemCase)(state, action) || state;
}

var wholeListCase = (state, action) => {
    return (actionTypeIs(action.type, 'setPayList')) && action.payload;
}

var listItemCase = (state, action) => {
    if(actionTypeIn(action.type, 'payList')){
        var nextState = [...state];
        nextState[action.index] = payListItemReducer(state[action.index], action);
        return nextState;
    }else{
        return false;
    }
}

var payListItemReducer = combineReducers({
    time,
    money,
    whichBank
});
```


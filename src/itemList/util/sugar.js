import {Route, IndexRoute, Link} from 'react-router'

var takeWhileTrue = (...cases) => (state,action) => {
    var result = false,
        i=0;
    while(i<cases.length && (result = cases[i].call(null,state,action)) === false ){
        i++;
    }
    if(result !== false)
        return result;
    return false;
}

var bindTransitionStyle = (style,config) => {
    return _.mapObject(config, styleKey=>{
        return style[styleKey];
    });
}
var capitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1);
}
var camelize = (str) => {
    return str.split('-').map((item, index)=>{
        return index==0?item:capitalize(item);
    }).join('');
}
var toObj = (keyArr, valueArr) => {
    var obj = {};
    _.each(keyArr, (key, index)=>{
        obj[key] = valueArr?valueArr[index]:''; 
    });
    return obj;
}


export {
    takeWhileTrue,
    bindTransitionStyle,
    camelize,
    toObj
};

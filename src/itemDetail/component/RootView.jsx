import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';
import {getItemAction} from '../action/itemAction'
import {getParameterByName} from '../util/sugar.js'
// var AnimationView = assume(true && TodoList);

import { divmain, imageWrapper, info } from './RootView.scss'

class RootView extends Component{
    constructor(props){
        super(props);
        this.props.getItem(getParameterByName('_d')||'');
    }
    componentWillMount(){
        // console.info('rootview componentWillMount');
    }
    componentDidMount(){
        // console.info('rootview componentDidMount');
    }
    componentWillReceiveProps(nextProps){
        // console.info('rootview componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps,nextState,nextContext){
        // console.info('rootview shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        // console.info('rootview componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState){
        // console.info('rootview componentDidUpdate');
    }
    render(){
        const {item, fetching} = this.props,
            {itemName, itemDesc, imgUrl, status, itemId, operateTime} = item;
        
        if(fetching === 'fetching' || fetching === 'init'){
            return <div>fetching</div>
        }
        if(fetching === 'fail'){
            return <div>get data fail</div>
        }
        // fetching === 'success'
        return <div className={divmain}>
            <div className={imageWrapper}>
                <img src={imgUrl} />
            </div>
            <div className={info}>
                <div>{itemName}</div>
                <div>{itemDesc}</div>
                <div>{status}</div>
                <div>{operateTime}</div>
            </div>
        </div>
    }
}

var mapStateToProps = (state)=>{
    return state
};

var mapDispatchToProps = (dispatch) => bindActionCreators({
    getItem(id){
        return getItemAction(dispatch, id);
    }
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootView);
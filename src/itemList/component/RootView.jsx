import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
//import _ from '@tencent/util';
// import assume from 'react-component-assume';
import {getItemListAction} from '../action/itemListAction'

import CareItem from './CareItem.jsx'
import {getParameterByName} from '../util/sugar.js'

// var AnimationView = assume(true && TodoList);

import {divmain, header, list, holder, footNoMore} from './RootView.scss'

class RootView extends Component{
    constructor(props){
        super(props);
        this.props.getItemListAll(getParameterByName('type'));
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
        const type = getParameterByName('type');
        const {itemList, fetching} = this.props;
        if(fetching === 'fetching' || fetching === 'init'){
            return <div>fetching</div>
        }
        if(fetching === 'fail'){
            return <div>get data fail</div>
        }
        // fetching === 'success'
        return <div className={divmain} >
            <div className={header}>
                {
                    type == 1 ? "我的心愿": "我的投放"
                }
            </div>
            <ul className={list}>
                <div className={holder}></div>
                {
                itemList.map((item, index)=>
                <li key={index}
                    className={null}
                    >
                    <CareItem {...item}/>
                </li>)
                }
                <li className={footNoMore}> &gt; __ &lt;   没有更多了...</li>
            </ul>
        </div>
    }
}

var mapStateToProps = (state)=>{
    return state
};

var mapDispatchToProps = (dispatch) => bindActionCreators({
    getItemListAll(type){
        return getItemListAction(dispatch,type);
    }
},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(RootView);
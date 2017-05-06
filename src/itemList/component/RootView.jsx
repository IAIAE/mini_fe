import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
//import _ from '@tencent/util';
// import assume from 'react-component-assume';
import {getItemListAction} from '../action/itemListAction'
import {showItemDetailAction, closeItemDetailActioin} from '../action/showItemDetailAction'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CareItem from './CareItem.jsx'
import {getParameterByName} from '../util/sugar.js'

// var AnimationView = assume(true && TodoList);

import rootStyle, {divmain, header, list, holder, footNoMore, loading, failPage, itemDetailPanel, smallLoading} from './RootView.scss'

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
    showLoading(){
        $('#smallLoading').show();
    }
    closeLoading(){
        $('#smallLoading').hide();
    }
    showMask(){
        $('#mask').show();
    }
    hideMask(){
        $('#mask').hide();
    }
    renderDetail(json){
        
    }
    handleItemClick(itemId){
        this.showLoading();
        fetch(CONSTANT.itemCGI + '?itemId=' + itemId+'&type=2')
        .then(response=>response.json())
        .then(json=>{
            this.closeLoading();
            this.showMask();
            this.renderDetail(json).then(_=>this.openDetail());
        })
        .catch(err=>{
            alert('不能打开物品信息，请稍后再试');
        })
    }
    render(){
        const type = getParameterByName('type');
        const {itemList, fetching} = this.props;
        if(fetching === 'fetching' || fetching === 'init'){
            return <div className={loading}></div>
        }
        if(fetching === 'fail'){
            return <div className={failPage} >加载数据失败</div>
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
                    <CareItem {...item} handleItemClick={_=>this.handleItemClick(_)}/>
                </li>)
                }
                <li className={footNoMore}> &gt; __ &lt;   没有更多了...</li>
            </ul>
            <div id="smallLoading" className={smallLoading} style={{display:'none'}} ></div>
            <div id="mask" className={rootStyle.mask} style={{display:'none'}}></div>
        </div>
    }
}

var mapStateToProps = (state)=>{
    return state
};

var mapDispatchToProps = (dispatch) => bindActionCreators({
    getItemListAll(type){
        return getItemListAction(dispatch, type);
    }
},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(RootView);
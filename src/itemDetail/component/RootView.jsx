import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';
import {getItemAction} from '../action/itemAction'
import {confirmAction} from '../action/confirmAction'
import {cancelAction} from '../action/cancelAction'


import {getParameterByName} from '../util/sugar.js'
// var AnimationView = assume(true && TodoList);

import styles from './RootView.scss'
const defaultItemUrl = require('assets/img/defaultItem.png');


class RootView extends Component{
    constructor(props){
        super(props);
        this.props.getItem(getParameterByName('itemId')||'');
    }
    handleImgerr(target){
        target.src = defaultItemUrl;
    }
    handleConfirm(evt){
        this.props.confirmDeal(this.props.item.itemId);
    }
    handleCancel(){
        this.props.cancelDeal(this.props.item.itemId);
    }
    getItemStatus (status) {
        let color = ''
        switch (status) {
            case 0:
                color = 'colorGreen'; //漂流中
                break;
            case 1:
                color = 'colorYellow'; //进行中
                break;
            case 2:
                color = 'colorGrey'; //已完成
                break;
            default:
                break;
        }
        return color;
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
            {itemName, itemDesc, imgUrl, itemStatus, itemId, operateTime} = item;
        
        const type = getParameterByName('type')||''
        if(fetching === 'fetching' || fetching === 'init'){
            return <div>fetching</div>
        }
        if(fetching === 'fail'){
            return <div>get data fail</div>
        }
        // fetching === 'success'
        return <div className={styles.divmain}>
            <div className={styles.header}>
                物品详情
            </div>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={imgUrl} onError={(e)=>this.handleImgerr(e.currentTarget)}/>
                </div>
                <div className={styles.label}>物品详情</div>
                <div className={styles.info}>
                    <div className = {styles.infoLine}>
                        <span className={styles.title}>物品名称:</span>
                        <span className={styles.content}>{itemName}</span>
                    </div>
                    <div className = {styles.infoLine}>
                        <span className={styles.title}>漂流时间:</span>
                        <span className={styles.content}>{operateTime}</span>
                    </div>
                    <div className = {styles.infoLine}>
                        <span className={styles.title}>物品金额:</span>
                        <span className={styles.content}>{operateTime}</span>
                    </div>
                    <div className = {styles.infoLine}>
                        <span className={styles.title}>物品状态:</span>
                        <span className={styles[this.getItemStatus(itemStatus)]}>{CONSTANT.itemStatusMap[itemStatus]}</span>
                    </div>
                    <div className>
                        <span className={styles.title}>物品描述:</span>
                    </div>
                    <div className={styles.itemDesc}>
                        {itemDesc}
                    </div>
                </div>

                <div className={styles.buttonWrap}>{
                    type == 1 ?  
                    <a className={styles.buttonGreen} href='tel:110' onTouchStart={(e)=>this.handleTouchStart(e.currentTarget)}>联系对方</a> 
                    : 
                    <div className={styles.buttonGroup}>
                        <div className={styles.buttonGreen} onClick={_=>this.handleConfirm(_)}>确认</div>
                        <div className={styles.buttonWhite} onClick={_=>this.handleCancel(_)} >取消</div>
                    </div>
                    }
                </div>
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
    },
    confirmDeal(id) {
        return confirmAction(dispatch, id);
    },
    cancelDeal(id) {
        return cancelAction(dispatch, id);
    }
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootView);
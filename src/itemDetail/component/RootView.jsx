import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';
import {getItemAction} from '../action/itemAction'
import {getParameterByName} from '../util/sugar.js'
// var AnimationView = assume(true && TodoList);

import styles from './RootView.scss'

class RootView extends Component{
    constructor(props){
        super(props);
        this.props.getItem(getParameterByName('itemId')||'');
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
                    <img src={imgUrl} />
                </div>
                <div className={styles.label}>物品详情</div>
                <div className={styles.info}>
                    <div className = {styles.infoLine}><span className={styles.title}>物品名称</span><span className={styles.content}>{itemName}</span></div>
                    <div className = {styles.infoLine}><span>操作时间</span>{operateTime}</div>
                    <div className = {styles.infoLine}>
                        <span>物品状态</span>
                        <span className={styles[this.getItemStatus(itemStatus)]}>{CONSTANT.itemStatusMap[itemStatus]}</span>
                        
                    </div>
                    <div className = {styles.infoLine}><span>物品描述</span>{itemDesc}</div>
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
    }
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootView);
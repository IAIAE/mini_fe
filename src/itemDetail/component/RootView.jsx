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
        return <div className={'divmain'}>
            <div className={'header'}>
                物品详情
            </div>
            <div className={'container'}>
                <div className={'imageWrapper'}>
                    <img src={imgUrl} onError={(e)=>this.handleImgerr(e.currentTarget)}/>
                </div>
                <div className={'label'}>物品详情</div>
                <div className={'info'}>
                    <div className = {'infoLine'}>
                        <span className={'title'}>物品名称:</span>
                        <span className={'content'}>{itemName}</span>
                    </div>
                    <div className = {'infoLine'}>
                        <span className={'title'}>漂流时间:</span>
                        <span className={'content'}>{operateTime}</span>
                    </div>
                    <div className = {'infoLine'}>
                        <span className={'title'}>物品金额:</span>
                        <span className={'content'}>{operateTime}</span>
                    </div>
                    <div className = {'infoLine'}>
                        <span className={'title'}>物品状态:</span>
                        <span className={this.getItemStatus(itemStatus)}>{CONSTANT.itemStatusMap[itemStatus]}</span>
                    </div>
                    <div className>
                        <span className={'title'}>物品描述:</span>
                    </div>
                    <div className={'itemDesc'}>
                        {itemDesc}
                    </div>
                </div>

                <div className={'buttonWrap'}>{
                    type == 1 ?  
                    <a className={'buttonGreen'} href='tel:110' onTouchStart={(e)=>this.handleTouchStart(e.currentTarget)}>联系对方</a> 
                    : 
                    <div className={'buttonGroup'}>
                        <div className={'buttonGreen'} onClick={_=>this.handleConfirm(_)}>确认</div>
                        <div className={'buttonWhite'} onClick={_=>this.handleCancel(_)} >取消</div>
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
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';

// var AnimationView = assume(true && TodoList);

import {itemRoot, itemInfo, itemStatus, name ,desc, header, statusLabel} from './CareItem.scss'

class CareItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    getItemStatus () {
        return 'itemStatus colorGreen';
    }

    handleClick() {
        location.href = './itemdetail.html?itemId=' + this.props.itemId;
    }
    render(){
        const {imgUrl, itemName, itemDesc, status, itemId, operateTime} = this.props;

        return <div className={itemRoot} onClick={this.handleClick}>
            <img src={imgUrl} />
            <div className={itemInfo}>
                <div className={name}>{itemName}</div>
                <div className={desc}>{itemDesc}</div>
                <div className={this.getItemStatus()}><span>当前状态:</span>{CONSTANT.itemStatusMap[status]}</div>
            </div>
        </div>
    }
} 

export default CareItem;
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';

// var AnimationView = assume(true && TodoList);

import './CareItem.scss'

class CareItem extends Component{
    render(){
        const {imgUrl, itemName, itemDesc, status, itemId, operateTime} = this.props;

        return <div className={itemRoot}>
            <img src={imgUrl} />
            <div className={itemInfo}>
                <div className="name">{itemName}</div>
                <div className="desc">{itemDesc}</div>
            </div>
            <div className={itemStatus}>{CONSTANT.itemStatusMap[status]}</div>
        </div>
    }
} 

export default CareItem;
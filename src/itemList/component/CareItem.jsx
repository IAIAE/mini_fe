import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';

// var AnimationView = assume(true && TodoList);

import {itemRoot, itemInfo, itemStatus} from './CareItem.scss'

class CareItem extends Component{
    render(){
        const {imgsrc, name, desc, status} = this.props;

        return <div className={itemRoot}>
            <img src={imgsrc} />
            <div className={itemInfo}>
                <div className="name">{name}</div>
                <div className="desc">{desc}</div>
            </div>
            <div className={itemStatus}>{CONSTANT.itemStatusMap[status]}</div>
        </div>
    }
} 

export default CareItem;
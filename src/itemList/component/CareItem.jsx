import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';

// var AnimationView = assume(true && TodoList);

//import {itemRoot, itemInfo, itemStatus, name ,desc, header, statusLabel} from './CareItem.scss'
import styles from './CareItem.scss'
const rightArrowUrl= require('assets/img/rightarrow.png');
const defaultItemUrl = require('assets/img/defaultItem.png');


class CareItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
    handleImgerr(target){
        target.src = defaultItemUrl;
    }
    handleClick() {
        location.href = './itemdetail.html?itemId=' + this.props.itemId;
    }
    componentDidMount(){
        
    }
    render(){
        const {imgUrl, itemName, itemDesc, status, itemId, operateTime} = this.props;
        return <div className={styles.itemRoot} onClick={this.handleClick}>
            <img className={styles.avatar} src={imgUrl} onError={(e)=>this.handleImgerr(e.currentTarget)} />
            <div className={styles.itemInfo}>
                <div className={styles.name}>{itemName}</div>
                <div className={styles.desc}>{itemDesc}</div>
                <div className={ styles.itemStatus+ ' ' + styles[this.getItemStatus(status)]}><span>当前状态:</span>{CONSTANT.itemStatusMap[status]}</div>
            </div>
            <div className={styles.rightArrowContainer}>
                <div>
                <img src={rightArrowUrl} alt=""  />
                </div>
            </div>
        </div>
    }
} 

export default CareItem;
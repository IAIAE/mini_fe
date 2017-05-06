import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';

// var AnimationView = assume(true && TodoList);

//import {itemRoot, itemInfo, itemStatus, name ,desc, header, statusLabel} from './CareItem.scss'
import styles from './CareItem.scss'

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
                color = 'colorRed'; //已完成
                break;
            default:
                break;
        }
        return color;
    }

    handleClick() {
        location.href = './itemdetail.html?itemId=' + this.props.itemId;
    }
    render(){
        const {imgUrl, itemName, itemDesc, status, itemId, operateTime} = this.props;

        return <div className={styles.itemRoot} onClick={this.handleClick}>
            <img src={styles.imgUrl} />
            <div className={styles.itemInfo}>
                <div className={styles.name}>{itemName}</div>
                <div className={styles.desc}>{itemDesc}</div>
                <div className={ styles.itemStatus+ ' ' + styles[this.getItemStatus(status)]}><span>当前状态:</span>{CONSTANT.itemStatusMap[status]}</div>
            </div>
        </div>
    }
} 

export default CareItem;
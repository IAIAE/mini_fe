import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CONSTANT from '../util/constant.js';
// import assume from 'react-component-assume';
import {getItemListAction} from '../action/itemListAction'

import CareItem from './CareItem.jsx'

// var AnimationView = assume(true && TodoList);

import {divmain } from './RootView.scss'

class RootView extends Component{
    constructor(props){
        super(props);
        this.props.getItemListAll();
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
        return <div className={divmain}>
            <ul>
                {
                this.props.itemList.map((item, index)=>
                <li key={index}
                    className={null}>
                    <CareItem {...item} />
                </li>)
                }
            </ul>
        </div>
    }
}

var mapStateToProps = (state)=>{
    return state
};

var mapDispatchToProps = (dispatch) => bindActionCreators({
    getItemListAll(){
        return getItemListAction(dispatch);
    }
},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(RootView);
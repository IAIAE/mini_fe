import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils';
import TodoList from '../../src/component/TodoList.jsx'
import _ from 'underscore';

describe('TodoList.test.js', () => {
    const todoList = ReactTestUtils.renderIntoDocument(
        <TodoList />
        );
    const node = ReactDOM.findDOMNode(todoList);
    const wrapSpan = ReactTestUtils.findRenderedDOMComponentWithTag(todoList,'span');
    test('list item init is 4: ',()=>{
        expect(_.toArray(wrapSpan.childNodes)).toHaveLength(4);
    });
    // test('list item init match right: ', ()=>{
    //     var expectArr = ['hello','world','click','me'];

    //     _.toArray(wrapSpan.childNodes).map(node=>node.textContent.trim()).forEach((content,index)=>{
    //         expect(content).toBe(expectArr[index]);
    //     });
    // });
    // test('click the third one and result is right: ', ()=> {
    //     var expectArr = ['hello','world','me'];
    //     var theThirdOne = wrapSpan.childNodes[2];
    //     ReactTestUtils.Simulate.click(theThirdOne);
    //     _.toArray(wrapSpan.childNodes).map(node=>node.textContent.trim()).forEach((content,index)=>{
    //         expect(content).toBe(expectArr[index]);
    //     });
    // });
});
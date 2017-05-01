import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from './CheckboxWithLabel.jsx'

var testNode=<div>hello world</div>;
console.info('testNode is element: ',ReactTestUtils.isElement(testNode));


describe('CheckboxWithLabel.test.js: ',()=>{
    const checkbox = ReactTestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        );
    const node = ReactDOM.findDOMNode(checkbox);
    test('component content is ok',()=>{
        expect(node.textContent).toEqual('Off');
    });
    
    describe('test onchange', () => {
        var input  = ReactTestUtils.findRenderedDOMComponentWithTag(checkbox,'input');
        test('first onchange ok:',()=>{
            ReactTestUtils.Simulate.change(input);
            expect(node.textContent).toEqual('On');
        })
        test('second onchange ok:',()=>{  
            ReactTestUtils.Simulate.change(input);
            expect(node.textContent).toEqual('Off');
        });
    });

    describe('test shallow render', () => {
        var renderer = ReactTestUtils.createRenderer();
        renderer.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
        var result = renderer.getRenderOutput();
        // console.info('checkbox is element: ',ReactTestUtils.isCompositeComponent(result))
        // console.info(result);
    });
});



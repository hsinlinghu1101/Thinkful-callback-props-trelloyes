
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
//snapshot test
import renderer from 'react-test-renderer';


/* smoke test
it ('renders learn react link', () => {
  
   const main =document.createElement('div')
   ReactDOM.render(<Card/>, main)
   ReactDOM.unmountComponentAtNode(main);
});*/

it ('renders learn react link', () => {
  
    const main =document.createElement('div')
    ReactDOM.render(<Card />, main)
    ReactDOM.unmountComponentAtNode(main);
 });

 it('render snapshot test', () =>{
     const tree = renderer
     
    .create(<Card  key='test'
    title='test'
    content='test'/>).toJSON();
    expect(tree).toMatchSnapshot();
 })

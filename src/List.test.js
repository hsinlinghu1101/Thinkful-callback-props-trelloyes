
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
//snapshot test
import renderer from 'react-test-renderer';
import STORE from './store';

 /* smoke test
it ('renders learn react link', () => {
 
   const main =document.createElement('section')
   ReactDOM.render(<List  card={[]}/>, main)
   ReactDOM.unmountComponentAtNode(main);
});*/


   it('render learn react link', () =>{
    const main =document.createElement('section')
    ReactDOM.render(<List 
        key={STORE.lists[0].id}
        header={STORE.lists[0].header}
        card = {STORE.lists[0].cardIds.map(id =>STORE.allCards[id])}
        />, main)
    ReactDOM.unmountComponentAtNode(main);
}); 

it('render learn react link', () =>{
    const tree=renderer
      .create (<List key={STORE.lists[0].id}
        header={STORE.lists[0].header}
        card = {STORE.lists[0].cardIds.map(id =>STORE.allCards[id])} /> ).toJson();
      expect(tree).toMatchSnapshot();
   });


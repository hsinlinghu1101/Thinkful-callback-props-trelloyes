import React from 'react';
import List from './List';
import STORE from './store';
import './App.css'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

export default class App extends React.Component {
state={
  store:STORE
}

handleAddCard=(listId)=>{

  const newCard= newRandomCard()
  const newList = this.state.store.lists.map( list => {
    if(list.id === listId ){
       return{
         ...list,
         cardIds: [...list.cardIds, newCard.id]
       }
    }
    return list
    
  })

  this.setState({
     store:{
      lists: newList,
      cardIds: {
        ...this.state.store.allCards,
        [newCard.id]:newCard
      }
     }
  })

}
handleDeleteCard=(idx)=>{

  const {lists, allCards} = this.state.store
  const newList = lists.map(list =>({
    ...list,
   cardIds: list.cardIds.filter(id => id !== idx)
  }))
  const deCard = omit(allCards, idx)

  this.setState({
   store:{
     lists:newList,
     cardIds: deCard

   }
  })

}
render(){
  const {store}=this.state
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {store.lists.map(list =>
        <List key={list.id} id={list.id} header={list.header} 
        cards={list.cardIds.map(id => store.allCards[id])} 
        onAddCard={this.handleAddCard}
        onDeleteCard={this.handleDeleteCard}/>
      )}
    
    </div>
    </main>
  );
}
  
}



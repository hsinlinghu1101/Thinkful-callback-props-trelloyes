import React from 'react';
import './List.css';
import Card from './Card';

export default function List (props){



    return(
        <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
        {props.cards.map(card =>
            <Card key={card.id} id={card.id} title={card.title} content={card.content} onDelete={props.onDeleteCard}/>
         )} 
       
       <button onClick={() =>props.onAddCard(props.id)}>Add Random Card</button>
        </div>
        </section>
    )
    
}

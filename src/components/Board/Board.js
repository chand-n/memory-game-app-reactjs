import Card from "../Card/Card";

import classes from "./Board.module.css";

function Board({ dimension,disabled, solved, cards, flipped, handleClick }) {
  return (
      <div className={classes.Board}>
          {
              cards.map((card) => {
                  
                  return (<Card
                      key={card.id}
                      id={card.id}
                      //basically holds the text value of the card 
                      type={card.type}
                      width={dimension / 4.5}
                      height={dimension / 4.5}
                      flipped={flipped.includes(card.id)}
                      disabled={disabled || solved.includes(card.id)}
                      handleClick={handleClick}
                      solved={ solved.includes(card.id)}
                  />)
              })
          }
      </div>
  )
}

export default Board;
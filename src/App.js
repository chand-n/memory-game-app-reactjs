import './App.css';
import React, { useState, useEffect } from 'react';

import Board from './components/Board/Board';

import initializeDeck from './util';


function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
    
    }, [])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);
    //componet didunmout()  we have use return keywork here 
    return () => window.removeEventListener('resize', resizeListener)
  });
  
  
  // console.log("App", cards)
  const handleClick = (id) => {
    setDisabled(true);
    //at any given time can only flip two cards at once 
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
      // return
    } else {
      //if clicked card twice 
      if (sameCardClicked(id)) return 'click another square';
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards()
      } else {
        //waits to two seconds to flip 
        setTimeout(resetCards, 500)
      }
    }
  };

  //Checks if same card is clipped do the flipped values contain that card 
  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    console.log("isMatch", clickedCard, flippedCard);
    return flippedCard.type === clickedCard.type;
  };

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      )
    )
  }
  const restartGame = () => {
		// this.setState({
			// gameStarted: false,
			setCards(initializeDeck())
			setDisabled(false); 
			setDimension(400); 
			setFlipped([]); 
      setSolved([]); 
      resizeBoard();
    }
    
  return (
    <div className="App">
      <div className="App-header">
        <h1>Memory Game</h1>
        {/* <h2>Can you remember where the cards are?</h2> */}
      </div>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
      <button className="" onClick={restartGame}>Play Again?</button>
    </div>
  );
}

export default App;
import './App.css';
import React, {useCallback, useState} from 'react'
import Centipede from './components/Centipede.js';
import Blotto from './components/Blotto.js';
import Score from './components/Score.js';
import Kuhn from './components/Kuhn.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle } from '@fortawesome/free-solid-svg-icons';

//have a winnings section to track how well the person does over all games - should we include bot winnings?
//Kuhn poker
//Traveler's dilemma


function App() {
  const [game, setGame] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const gameCount = 2;

  const handleNext = () => {
    if( game === gameCount){

    } else {
      setGame(prevGame => prevGame + 1);
    }
  }

  const handlePrev = () => {
    if(game !== 0){
      setGame(prevGame => prevGame - 1);
    }
  }

  const totalScore = useCallback((data) => {
    setGameScore(prevGameScore => prevGameScore + data);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Understanding Game Theory</h1>
      </header>
      <Score score={gameScore} />
      <div className="icon_bar">
        <FontAwesomeIcon icon={faChevronLeft} className="shuffle" onClick={handlePrev}/>
        <FontAwesomeIcon icon={faCircle} className={game === 0 ? "shuffle_page_icon_current" : "shuffle_page_icon"}/>
        <FontAwesomeIcon icon={faCircle} className={game === 1 ? "shuffle_page_icon_current" : "shuffle_page_icon"} />
        <FontAwesomeIcon icon={faCircle} className={game === 2 ? "shuffle_page_icon_current" : "shuffle_page_icon"} />
        <FontAwesomeIcon icon={faChevronRight} className="shuffle" onClick={handleNext}/>
      </div>
      {game === 0 ? <Centipede passGameScore={totalScore}/> : null}
      {game === 1 ? <Blotto  passGameScore={totalScore} /> : null}
      {game === 2 ? <Kuhn passGameScore={totalScore}/> : null}
    </div>
  );
}

export default App;

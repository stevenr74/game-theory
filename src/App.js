import './App.css';
import React, {useCallback, useState} from 'react'
import Centipede from './components/Centipede';
import Blotto from './components/Blotto';
import Score from './components/Score';
import Kuhn from './components/Kuhn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faChevronLeft} className="shuffle" onClick={handlePrev}/>
      <FontAwesomeIcon icon={faChevronRight} className="shuffle" onClick={handleNext}/>
      {game === 0 ? <Centipede passGameScore={totalScore}/> : null}
      {game === 1 ? <Blotto  passGameScore={totalScore} /> : null}
      {game === 2 ? <Kuhn passGameScore={totalScore}/> : null}
    </div>
  );
}

export default App;
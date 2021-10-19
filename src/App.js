import './App.css';
import React, {useState} from 'react'
import Centipede from './components/Centipede';
import Blotto from './components/Blotto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//have a winnings section to track how well the person does over all games
//Kuhn poker
//Traveler's dilemma


function App() {
  const [game, setGame] = useState(0);

  const handleNext = () => {
    setGame(prevGame => prevGame + 1);
  }

  const handlePrev = () => {
    if(game !== 0){
      setGame(prevGame => prevGame - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Understanding Game Theory</h1>
      </header>
      <FontAwesomeIcon icon={faChevronLeft} className="shuffle" onClick={handlePrev}/>
      <FontAwesomeIcon icon={faChevronRight} className="shuffle" onClick={handleNext}/>
      {game === 0 ? <Centipede /> : null}
      {game === 1 ? <Blotto /> : null}
    </div>
  );
}

export default App;

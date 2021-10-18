import './App.css';
import Centipede from './components/Centipede';

//have a winnings section to track how well the person does over all games

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Understanding Game Theory</h1>
      </header>
      <Centipede />
    </div>
  );
}

export default App;

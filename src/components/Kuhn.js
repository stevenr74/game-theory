import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import king  from './images/king.png'
import queen  from './images/queen.png'
import jack  from './images/jack.png'
import deck from './images/deck.jpg'

const Kuhn = (props) => {
    const [playerCard, setPlayerCard] = useState(false);
    const [botCard, setBotCard] = useState(false);
    const cards = {
        1: king,
        2: queen, 
        3: jack
    };


    const clearState = () => {
        
    }

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deal = () => {
        var pCard = getRandomInt(1, 3);
        var bCard = getRandomInt(1, 3);

        if(pCard !== bCard){
            setPlayerCard(cards[pCard]);
            setBotCard(cards[bCard]);

            console.log(cards[pCard]);
            console.log(cards[bCard]);
        } else {
            deal();
        }
    }

    return (
        <div className="centipede">
            <h2>Kuhn Poker</h2>
            <p>
                Kuhn Poker is an zero-sum imperfect-information game based on standard poker. Two players
                are dealt a card from a three card deck containing a King, Queen, and Jack. Players then place
                bets like in poker (calling/raising/folding), with the player with the highest card winning at showdown.

                To start the game, click the deck to deal the cards.
            </p>
            <input type="image" src={deck} onClick={deal} alt="deck" className="cards"/>
            {(playerCard !== false) ? <img src={playerCard} alt="card" className="cards"></img> : null}
            <FontAwesomeIcon icon={faRedo} onClick={clearState} className="shuffle"/>
        </div>
    )
}

export default Kuhn;
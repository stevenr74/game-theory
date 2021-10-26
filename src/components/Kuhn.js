import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import king  from './images/king.png'
import queen  from './images/queen.png'
import jack  from './images/jack.png'
import deck from './images/deck.jpg'

const Kuhn = (props) => {
    const [playerCard, setPlayerCard] = useState(false);
    const [playerStack, setPlayerStack] = useState(100);
    const [botStack, setBotStack] = useState(100);
    const [botCard, setBotCard] = useState(false);
    const [playerCardNumber, setPlayerCardNumber] = useState(0);
    const [botCardNumber, setBotCardNumber] = useState(0);
    const [pot, setPot] = useState(0);
    //const [playerTurn, setPlayerTurn] = useState(false);
    const [winner, setWinner] = useState(null);
    const [playerOwes, setPlayerOwes] = useState(0);
    const [botOwes, setBotOwes] = useState(0);

    const cards = {
        1: king,
        2: queen, 
        3: jack
    };
    const anteCost = 1;


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
            setPlayerCardNumber(pCard);
            setBotCardNumber(bCard);
            ante();
            return;
        } else {
            deal();
        }
    }

    const ante = () => {
        setPot(prevAnteCost => prevAnteCost + (anteCost * 2));
        setPlayerStack(prevPlayerStack => prevPlayerStack - anteCost);
        setBotStack(prevBotStack => prevBotStack - anteCost);
    }

    const check = () => {
        //setPlayerTurn(prevPlayerTurn => !prevPlayerTurn);
        botChoice();
    }

    //can also be used for call
    const bet = () => {
        setPot(pot + anteCost);
        setBotOwes(anteCost);
        //setPlayerTurn(prevPlayerTurn => !prevPlayerTurn);
        botChoice();
    }

    const fold = () => {

    }

    const botChoice = () => {
        if(botCardNumber === 3){
            //fold();
        } else if (botCardNumber === 2) {
            //bet();
        } else {
            //bet();
        }
    }


    return (
        <div className="centipede">
            <h2>Kuhn Poker</h2>
            <p>
                Kuhn Poker is an zero-sum imperfect-information game based on standard poker. Two players
                are dealt a card from a three card deck containing a King, Queen, and Jack. Players then place
                bets like in poker (calling/raising/folding), with the player with the highest card winning at showdown.

            </p>
            <div className="submitBlottoDiv">
                <button className="submitBlotto" onClick={deal}>Deal</button>
            </div>
            <div className="stacks">
                <h3>Player Stack: ${playerStack}</h3>
                <h3>Bot Stack: ${botStack}</h3>
            </div>
            {(playerCard !== false) ? <img src={playerCard} alt="card" className="cards"></img> : null}
            {(botCard !== false) ? <img src={deck} alt="card" className="cards"></img> : null}
            <div className="submitBlottoDiv">
                {(playerOwes => 1) ?
                    <div className="noBet">
                        <button>Check</button>
                        <button>Bet 1</button>
                    </div>
                    :
                    <div className="bet">
                        <button>Call</button>
                        <button>Fold</button>
                    </div>
                }
            </div>
            <h3>Pot: ${pot}</h3>
        </div>
    )
}

export default Kuhn;
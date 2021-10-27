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
    const [botCardNumber, setBotCardNumber] = useState(0);
    const [pot, setPot] = useState(0);
    const [winner, setWinner] = useState(null);
    const [playerOwes, setPlayerOwes] = useState(0);
    const [botOwes, setBotOwes] = useState(0);
    const [botAction, setBotAction] = useState('None');

    const cards = {
        1: king,
        2: queen, 
        3: jack
    };
    const anteCost = 1;

    //const [playerCardNumber, setPlayerCardNumber] = useState(0);

    const refresh = () => {
        setPlayerCard(false);
        setPlayerStack(100);
        setBotStack(100);
        setBotCard(false);
        setBotCardNumber(0);
        setPot(0);
        setWinner(null);
        setPlayerOwes(0);
        setBotOwes(0);
        setBotAction('None');
    }

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deal = () => {
        //need to clear states of in-play variables for next hand
        setWinner(null);
        setPlayerOwes(0);
        setBotOwes(0);
        setBotAction('None');
        setPot(0);
        

        var pCard = getRandomInt(1, 3);
        var bCard = getRandomInt(1, 3);

        if(pCard !== bCard){
            setPlayerCard(cards[pCard]);
            setBotCard(cards[bCard]);
            //setPlayerCardNumber(pCard);
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
        botChoice();
    }

    //can also be used for call
    const bet = () => {
        setPot(pot + anteCost);
        setBotOwes(anteCost);
        setPlayerOwes(0);
        setPlayerStack(prevPlayerStack => prevPlayerStack - anteCost);
        botChoice();
    }

    const fold = () => {
        setWinner('Bot');
        setBotStack(prevBotStack => prevBotStack + pot);
    }

    //need to extend logic for K/Q decision making
    const botChoice = () => {
        //testing === 3
        if(botCardNumber < 4){
            //fold
            setWinner('You');
            setBotAction('Fold');
            setPlayerStack(playerStack + pot);
        } else  {
            if(botOwes === 0){
                //call
                setPot(pot + anteCost);
                setBotStack(botStack - anteCost);
                setBotAction('Call');
            } else {
                //bet
                setPot(pot + anteCost);
                setBotStack(botStack - anteCost);
                setPlayerOwes(anteCost);
                setBotAction('Raise');
            }
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
            {playerCard !== false ?
                <>
                <div className="cardLabels">
                    <h3 className="cardLabelPlayer">Your Card</h3>
                    <h3 className="cardLabelBot">Bot's Card</h3>
                </div>
                <div>
                    <img src={playerCard} alt="card" className="cards"></img>
                    {winner !== null ? <img src={botCard} alt="card" className="cards"></img> : <img src={deck} alt="card" className="cards"></img>}
                </div>
                <div className="submitBlottoDiv">
                    {playerOwes === 0 ?
                        <div className="noBet">
                            <button onClick={check}>Check</button>
                            <button onClick={bet}>Bet 1</button>
                        </div>
                        :
                        <div className="bet">
                            <button onClick={bet}>Call</button>
                            <button onClick={fold}>Fold</button>
                        </div>
                    }
                </div>
                <h3>Bot Action: {botAction}</h3>
                <h3>Pot: ${pot}</h3>
                {winner ? <h3>{winner} won ${pot}!</h3> : null}
                </>
            : null}
            <FontAwesomeIcon icon={faRedo} onClick={refresh} className="shuffle"/>
        </div>
    )
}

export default Kuhn;
import React, {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import king  from './images/king.png'
import queen  from './images/queen.png'
import jack  from './images/jack.png'
import deck from './images/deck.jpg'

const Kuhn = (props) => {
    const cards = {
        1: king,
        2: queen, 
        3: jack
    };
    const anteCost = 10;
    const moves = {
        CHECK: "Check",
        BET: "Bet",
        FOLD: "Fold",
        CALL: "Call",
        NONE: "None"
    }
    const players = {
        BOT: "Bot",
        HUMAN: "You",
    }

    const [playerCard, setPlayerCard] = useState(false);
    const [playerStack, setPlayerStack] = useState(100);
    const [botStack, setBotStack] = useState(100);
    const [botCard, setBotCard] = useState(false);
    const [botCardNumber, setBotCardNumber] = useState(0); //should probably be refs
    const [playerCardNumber, setPlayerCardNumber] = useState(0); //this as well
    const [pot, setPot] = useState(0);
    const [winner, setWinner] = useState(null);
    const [playerOwes, setPlayerOwes] = useState(0);
    const [botAction, setBotAction] = useState(moves.NONE);

    const { passGameScore } = props;
    const owes = useRef(0);
    const currentPot = useRef(0);
    const currentPlayerStack = useRef(100);
    const currentBotStack = useRef(100);

    const refresh = () => {
        setPlayerCard(false);
        setPlayerStack(100);
        setBotStack(100);
        setBotCard(false);
        setBotCardNumber(0);
        setPot(0);
        setWinner(null);
        setPlayerOwes(0);
        setBotAction(moves.NONE);
    }

    useEffect(() => {    
        const sendScore = (data) => {
            passGameScore(data);
        }
        //call sendScore when playerstack is higher/lower than 100
    }, [winner, passGameScore])

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deal = () => {
        //need to clear states of in-play variables for next hand
        setWinner(null);
        setPlayerOwes(0);
        setBotAction(moves.NONE);
        
        currentPot.current = 0;
        owes.current = 0;
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
        currentPot.current = anteCost + anteCost;
        currentPlayerStack.current -= anteCost;
        currentBotStack.current -= anteCost;

        setPot(currentPot.current);
        setPlayerStack(currentPlayerStack.current);
        setBotStack(currentBotStack.current);
    }

    const playerCheck = () => {
        owes.current = 0;
        botChoice();
    }

    //can also be used for call
    const playerBet = () => {
        currentPlayerStack.current -= anteCost;
        currentPot.current += anteCost;
        owes.current = 1;

        setPot(currentPot.current);
        setPlayerOwes(0);
        setPlayerStack(currentPlayerStack.current)
        botChoice();
    }

    const playerFold = () => {
        currentBotStack.current += currentPot.current;

        setWinner(players.BOT);
        setBotStack(currentBotStack.current);
    }

    //need to extend logic for K/Q decision making
    const botChoice = () => {
        if(botCardNumber === 3){
            if(owes.current === 0){
                //check
                botCheck();
            } else {
                //fold
                botFold();
            }
        } else if (botCardNumber === 2) {
            if(owes.current === 0){
                //bet or fold
                botBet();
            } else {
                //human bet, could have king
                if(currentPot.current < 5){
                    botCall();
                } else {
                    botFold();
                }
            }
        } else {
            //have king, keep betting
            botBet();
        } 
    }

    //check->check = showdown
    const botCheck = () => {
        //check-check = find winner
        setBotAction(moves.CHECK);
        if(botCardNumber > playerCardNumber ){
            //bot wins
            currentBotStack.current += currentPot.current;

            setWinner(players.BOT);
            setBotAction(moves.CHECK);
            setBotStack(currentBotStack.current);
        } else {
            //player wins
            currentPlayerStack.current += currentPot.current;

            setWinner(players.HUMAN);
            setBotAction(moves.CHECK);
            setPlayerStack(currentPlayerStack.current);
        }
        //find winner
    }

    const botCall = () => {
        currentPot.current += anteCost;
        currentBotStack.current -= anteCost;
        owes.current = 0;

        setPot(currentPot.current);
        setBotStack(currentBotStack.current);
        setBotAction(moves.CALL);
    }

    //when bot bets it isnt added to pot?
    //something wrong with setpot & currentpot <3 <3 goodnight
    const botBet = () => {
        currentPot.current += anteCost;
        currentBotStack.current -= anteCost;
        if(owes.current > 0){
            setBotAction(moves.CALL);
        } else {
            setBotAction(moves.BET);
        }
        owes.current = 0;

        setPot(currentPot.current);
        setBotStack(currentBotStack.current);
        setPlayerOwes(anteCost);
    }

    const botFold = () => {
        currentPlayerStack.current += currentPot.current;

        setWinner(players.HUMAN);
        setBotAction(moves.FOLD);
        setPlayerStack(currentPlayerStack.current);
    }


    return (
        <div className="centipede">
            <h2>Simplified Poker</h2>
            <p>
                Also known as Kuhn Poker, this simplified version is an zero-sum imperfect-information game based on standard poker. Two players
                are dealt a card from a three card deck containing a King, Queen, and Jack, and put in the same ante of ${anteCost}. Players then place
                bets like in poker (calling/raising/folding), with the player with the highest card winning if a showdown occurs.

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
                            <button onClick={playerCheck}>Check</button>
                            <button onClick={playerBet}>Bet {anteCost}</button>
                        </div>
                        :
                        <div className="bet">
                            <button onClick={playerBet}>Call</button>
                            <button onClick={playerFold}>Fold</button>
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
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
        NONE: "None",
        ALLIN: "All-in",
    }
    const players = {
        BOT: "Bot",
        HUMAN: "You",
    }

    const [playerCard, setPlayerCard] = useState(false);
    const [playerStack, setPlayerStack] = useState(100);
    const [botStack, setBotStack] = useState(100);
    const [botCard, setBotCard] = useState(false);
    const [pot, setPot] = useState(0);
    const [winner, setWinner] = useState(null);
    const [playerOwes, setPlayerOwes] = useState(0);
    const [botAction, setBotAction] = useState(moves.NONE);
    const [gameWinner, setGameWinner] = useState(false);

    const currentBotCardNumber = useRef(0);
    const currentPlayerCardNumber = useRef(0);
    const { passGameScore } = props;
    const owes = useRef(0);
    const currentPot = useRef(0);
    const currentPlayerStack = useRef(100);
    const currentBotStack = useRef(100);

    const refresh = () => {
        currentBotStack.current = 100;
        currentPlayerStack.current = 100;
        owes.current = 0;
        currentPot.current = 0;
        currentBotCardNumber.current = 0;
        currentPlayerCardNumber.current = 0;

        setPlayerCard(false);
        setPlayerStack(100);
        setBotStack(100);
        setBotCard(false);
        setPot(0);
        setWinner(null);
        setPlayerOwes(0);
        setBotAction(moves.NONE);
        setGameWinner(false);
    }

    //monitor player/bot scores, set winner and update winnings
    useEffect(() => {    
        const sendScore = (data) => {
            passGameScore(data);
        }
        if((currentPlayerStack.current <= 0 || currentBotStack.current <= 0) && (gameWinner === false)){
            //find outcome of current hand
            if(currentBotCardNumber.current > currentPlayerCardNumber.current ){
                currentPlayerStack.current += currentPot.current;
                setWinner(players.HUMAN);
                setPlayerStack(currentPlayerStack.current);
            } else {
                currentBotStack.current += currentPot.current;
                setWinner(players.BOT);
                setBotStack(currentBotStack.current);
            }

            //find if a player is eliminated
            if(currentBotStack.current <= 0){
                //player wins
                setGameWinner(players.HUMAN);
                sendScore(currentPlayerStack.current);
            } else if (currentPlayerStack.current <= 0){
                //bot wins
                setGameWinner(players.BOT);
            }
        }
    }, [playerStack, botStack, passGameScore, players.BOT, 
        players.HUMAN, winner, gameWinner])


    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deal = () => {
        
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
            currentPlayerCardNumber.current = pCard;
            currentBotCardNumber.current = bCard;
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
        owes.current = anteCost;

        setPot(currentPot.current);
        setPlayerOwes(0);
        setPlayerStack(currentPlayerStack.current)
        botChoice();
    }

    const playerCall = () => {
        currentPlayerStack.current -= anteCost;
        currentPot.current += anteCost;
        
        setPot(currentPot.current);
        setPlayerOwes(0);
        setPlayerStack(currentPlayerStack.current);

        showdown();
    }

    const playerFold = () => {
        currentBotStack.current += currentPot.current;

        setWinner(players.BOT);
        setBotStack(currentBotStack.current);
    }

    //need to extend logic for K/Q decision making, maybe randomize
    const botChoice = () => {
        if(currentBotCardNumber.current === 3){
            if(owes.current === 0){
                //check
                botCheck();
            } else {
                //fold
                botFold();
            }
        } else if (currentBotCardNumber.current === 2) {
            if(owes.current === 0){
                //bet or fold
                botBet();
            } else {
                //human bet, could have king
                if(currentPot.current <= (3 * anteCost)){
                    botCall();
                } else {
                    botFold();
                }
            }
        } else {
            //have king, keep betting
            if(owes.current === 0){
                botBet();
            } else{
                botCall();
            }
        } 
    }

    //check->check = showdown
    const botCheck = () => {
        //check-check = find winner
        setBotAction(moves.CHECK);
        if(currentBotCardNumber.current < currentPlayerCardNumber.current ){
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

        showdown();
    }

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

    const showdown = () => {
        if(currentBotCardNumber.current < currentPlayerCardNumber.current ){
            //bot wins
            currentBotStack.current += currentPot.current;

            setWinner(players.BOT);
            setBotStack(currentBotStack.current);
        } else {
            //player wins
            currentPlayerStack.current += currentPot.current;

            setWinner(players.HUMAN);
            setPlayerStack(currentPlayerStack.current);
        }
    }

    return (
        <div className="centipede">
            <h2>Simplified Poker</h2>
            <p>
                Also known as Kuhn Poker, this simplified version is an zero-sum imperfect-information game based on standard poker. Two players
                are dealt a card from a three card deck containing a King, Queen, and Jack, and put in the same ante of ${anteCost}. Players then place
                bets like in poker (calling/raising/folding), with the player with the highest card winning if a showdown occurs.

            </p>
            {(gameWinner === false) ? <div className="pokerWin">
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
                    {winner === null ?
                        <div className="submitBlottoDiv">
                            {playerOwes === 0 ?
                                <div className="noBet">
                                    <button onClick={playerCheck}>Check</button>
                                    <button onClick={playerBet}>Bet {anteCost}</button>
                                </div>
                                :
                                <div className="bet">
                                    <button onClick={playerCall}>Call</button>
                                    <button onClick={playerFold}>Fold</button>
                                </div>
                            }
                        </div>
                    : null}
                    <h3>Bot Action: {botAction}</h3>
                    <h3>Pot: ${pot}</h3>
                    {winner ? <h3>{winner} won ${pot}!</h3> : null}
                    </>
                : null}
            {( pot === 0 || winner ) ? 
            <div className="pokerDeal">
                <button className="submitBlotto" onClick={deal}>Deal</button>
            </div> : null}    
            </div>
            :
                <>
                <div>
                    <img src={playerCard} alt="card" className="cards"></img>
                    <img src={botCard} alt="card" className="cards"></img>
                </div>
                <h3>{winner} won the game!</h3> 
                <FontAwesomeIcon icon={faRedo} onClick={refresh} className="shuffle"/>
                </>
            }
        </div>
    )
}

export default Kuhn;
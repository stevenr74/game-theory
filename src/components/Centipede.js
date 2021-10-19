import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const Centipede = () => {
    const [count, setCount] = useState(0);
    const [mainPot, setMainPot] = useState(3);
    const [sidePot, setSidePot] = useState(1);
    const [take, setTake] = useState(false);
    const [strategy] = useState(Math.floor(Math.random() * 10));
    const [winner, setWinner] = useState(false);
    const [botAction, setBotAction] = useState(false);

    //handle bot turn as well as maxiumum turns
    const handlePass = () => {
        setCount(prevCount => prevCount + 1);
        setMainPot(prevPot => prevPot * 2);
        setSidePot(prevPot => prevPot * 2);

        if(strategy <= 1){
            //take the pot
            setWinner(false);
            setTake(true);
            setBotAction(false);
        } else {
            //play determined number of rounds before taking pot
            if(count === 9){
                setWinner(false);
                setTake(true);
                setBotAction(false);
            } else if (count === strategy){
                setWinner(false);
                setTake(true);
                setBotAction(false);
            } else {
                setMainPot(prevPot => prevPot * 2);
                setSidePot(prevPot => prevPot * 2);
                setBotAction(true);
            }
        }
    };

    const handleTake = () => {
        setTake(true);
        setWinner(true);
    }

    function refreshPage(){
        window.location.reload();
    }


    return (
        <div className="centipede">
            <h2>Centipede Game</h2>
            <p>
                Two players take turns choosing to either take the main pot, or pass
                to the other player. Payoffs are such that if one player (A) passes the pot to
                the opponent and the opponent takes the pot, player A recieves the side pot - less than if they had 
                taken the main pot the previous turn. The main pot starts at $3, the side pot at $1, 
                and both are doubled every time a player passes. For this version there is a maximum of 10 rounds before the pot is taken. Your bot
                opponent will use varying strategies to demonstrate possible scenarios.
            </p>
            <h3>Main Pot is ${mainPot}</h3>
            <h3>Side Pot is ${sidePot}</h3>
            <h3>Round is {count}</h3>
            {take ? null : 
                <div className="options">
                    <button onClick={handlePass}>Pass</button>
                    <button onClick={handleTake}>Take</button>
                </div>
            }
            <h3>Bot Action: {botAction ? "Pass" : null}</h3>
            {take ?
            <div className="explanation">
                {winner ? <h3>You took the pot totalling ${mainPot}!</h3> : <h3>The bot took the pot totalling ${mainPot}! You got ${sidePot}.</h3>}
                <p>
                    The subgame perfect equilibrium (a refinement of the&nbsp;
                    <a href='https://www.investopedia.com/terms/n/nash-equilibrium.asp'>nash equilibrium</a>) 
                    for Centipede tells us to take the pot on the first turn,
                    which is established by the process of backwards induction. 
                    For example, if play reaches the last round between player A and B, and
                    it's B's turn, B should take the pot or they will lose. Since B must take
                    the pot that turn, A should take the pot on the second to last turn
                    in order to win before B. Knowing this, B should take the pot on the third
                    to last turn. This reasoning continues backwards through the game tree until
                    one finds that the best action is the first player taking the main pot on the first round.
                </p>
                <p>
                    In empirical tests few human players follow this rational strategy, and so
                    recieve higher payoffs than the previously mentioned equilibrium. This is
                    interesting because it highlights how the equilibria sometimes fail to predict human play.
                </p>
                <FontAwesomeIcon icon={faRedo} className="shuffle" onClick={refreshPage}/>
            </div> 
            : null }
        </div>
    )
}

export default Centipede;
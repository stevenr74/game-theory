import React, {useState} from 'react'

const Centipede = () => {
    const [count, setCount] = useState(0);
    const [pot, setPot] = useState(100);
    const [take, setTake] = useState(false);

    //handle bot turn as well as maxiumum turns
    const handlePass = () => {
        setCount(prevCount => prevCount + 1);
        setPot(prevPot => prevPot + 5);
    };

    const handleTake = () => {
        setTake(true);
    }


    return (
        <div className="centipede">
            <h2>Centipede Game</h2>
            <p>Two players take turns choosing to either take the current pot, or pass
               to the other player. When a pass occurs the pot is increased slightly.
               The pot starts at $100, and is incremeneted by $10 every pass. For this
               version there is a maximum of 10 passes before the pot is taken. Your bot
               opponent will use varying strategies to demonstrate possible scenarios.
            </p>
            <h3>Pot is {pot}</h3>
            <h3>Count is {count}</h3>
            <button onClick={handlePass}>Pass</button>
            <button onClick={handleTake}>Take</button>
            {take ?
            <div className="explanation">
                <h3>You took the pot totalling ${pot}!</h3> 
                <p>The subgame perfect equilibrium (a refinement of the nash equilibrium) 
                for Centipede tells us to take the pot on the first turn,
                which is established by the process of backwards induction. 
                For example, if play reaches the last round between player A and B, and
                it's B's turn, B should take the pot or they will lose. Since B must take
                the pot that turn, A should take the pot on the second to last turn
                in order to win before B. Knowing this, B should take the pot on the third
                to last turn. This reasoning continues backwards through the game tree until
                one finds that the best action is the first player defecting on the first round.
                </p>
            </div> : null }
        </div>
    )
}

export default Centipede;
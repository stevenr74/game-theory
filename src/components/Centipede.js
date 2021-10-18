import React, {useState} from 'react'

const Centipede = () => {
    const [count, setCount] = useState(0);
    const [pot, setPot] = useState(100);
    const [take, setTake] = useState(false);

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
            {take ? "You took the pot totalling $" + pot + "!": null}
        </div>
    )
}

export default Centipede;
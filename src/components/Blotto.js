import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

//implement resource allocation via drag and drop?

const Blotto = (props) => {
    
    const resources = 13;
    const reward = 1000;
    const [winner, setWinner] = useState(false);
    const [botNumbers, setBotNumbers] = useState(0);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(false);
    const { passGameScore } = props;
    const [values,setValues] = useState({
        bf1:1,
        bf2:1,
        bf3:1,
    })
    const [maxValues,setMaxValues] = useState({
        bf1:11,
        bf2:11,
        bf3:11,
    })
    const permutations = [
        {bf1: 3, bf2: 5, bf3: 5},
        {bf1: 5, bf2: 3, bf3: 5},
        {bf1: 5, bf2: 5, bf3: 3},
        {bf1: 3, bf2: 7, bf3: 3},
        {bf1: 7, bf2: 3, bf3: 3},
        {bf1: 3, bf2: 3, bf3: 7},
        {bf1: 1, bf2: 5, bf3: 7},
        {bf1: 5, bf2: 7, bf3: 1},
        {bf1: 7, bf2: 1, bf3: 5},
        {bf1: 7, bf2: 5, bf3: 1},
        {bf1: 1, bf2: 7, bf3: 5},
        {bf1: 5, bf2: 1, bf3: 7}
    ];

    const clearState = () => {
        setWinner(false);
        setBotNumbers(0);
        setTotal(0);
        setError(false);
        setValues({bf1: 1, bf2: 1, bf3: 1});
        setMaxValues({bf1: 11, bf2: 11, bf3: 11});
    }

    const valuesHandler = (e) => {
        let name= e.target.name;
        let value= e.target.value;
        const newValues = {
            ...values,
            [name]: value
        }
        setValues(newValues)
        calcTotal(newValues) 
    }
    
    const calcTotal = (newValues) => {
        const { bf1, bf2, bf3} = newValues;
        const newTotal = parseInt(bf1) + parseInt(bf2) + parseInt(bf3)
        setTotal(newTotal);

        //if a non-number is entered it disables input
        if(isNaN(newTotal)){
            setMaxValues({bf1: 0, bf2: 0, bf3: 0});
            return;
        }
        const difference = resources-newTotal;
        const newMaxValues = {
            ...values,
                "bf1": parseInt(bf1) + difference,
                "bf2": parseInt(bf2) + difference,
                "bf3": parseInt(bf3) + difference,
        }
        setMaxValues(newMaxValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(total === resources){
            //allow to proceed
            setError(false);
            let botResult = botStrategy();
            setBotNumbers(botResult); 
            findResult(botResult);
        } else {
            //ask for total resources to equal 13
            setError(true);
        }
    }

    function roll() {
        return Math.floor(Math.random() * 11 + 1); //1-10
     }

    function chooseNumbers() {
        var x = 0, y = 0, z = 0;
        while (x + y + z !== 13) {
           x = roll();
           y = roll();
           z = roll();
        }
        return {bf1: x, bf2: y, bf3: z};
    }

    function choosePermutation() {
        return permutations[Math.floor(Math.random() * permutations.length)];
    }

    // For S = 13, choosing (3, 5, 5), (3, 3, 7) and (1, 5, 7) 
    //with probability 1/3 each can be shown to be the optimal probabilistic strategy.
    //half the time follow optimal probabilistic, other half randomize
    const botStrategy = () => {
        var strat;
        const roll = Math.floor(Math.random() * 10);
        if(roll <= 5){
            //optimal
            strat = choosePermutation();
        } else {
            //random
            strat = chooseNumbers();
        }
        return strat;
    }

    const findResult = (botNums) => {
        let human = 0, bot = 0;
        Object.keys(values).forEach( function (key) {
            if (values[key] > botNums[key]){
                human += 1;
            } else if (botNums[key] > values[key]){
                bot += 1;
            } else {
            }
        });

        if(human > bot){
            setWinner('You won!');
        } else if (bot > human) {
            setWinner('The bot won!');
        } else {
            setWinner("It's a tie!");
        }
    }

    useEffect(() => {    
        const sendScore = (data) => {
            passGameScore(data);
        }
        if(winner === 'You won!'){
            sendScore(reward);
        } else {

        }
    }, [winner, passGameScore])


    return (
        <div className="centipede">
            <h2>Colonel Blotto Game</h2>
            <p>
                Two players distribute finite resources over several battlefields, with each
                specific battle decided by whoever allocated more resources. In this version, players will record three
                positive integers that add up to {resources}. The player who has two numbers
                higher than the opponents wins the round (and gets ${reward} added to winnings), and if points are tied its a draw.
            </p>
            <form onSubmit={handleSubmit}>
                <h3>Allocate your resources below:</h3>
                <input type="number" id="bf1" value={values["bf1"]} name="bf1" min="1" max={maxValues["bf1"]} onInput={valuesHandler} />
                <input type="number"  id="bf2" value={values["bf2"]} name="bf2" min="1" max={maxValues["bf2"]} onInput={valuesHandler}/>
                <input type="number" id="bf3" value={values["bf3"]} name="bf3" min="1" max={maxValues["bf3"]} onInput={valuesHandler}/>
                {winner ? null : 
                    <div className="submitBlottoDiv">
                        <button className="button1" type="submit">Submit</button>
                    </div>
                }
                {error ? <p>Enter three numbers totaling {resources}.</p> : null}
            </form>
            {botNumbers !== 0 ?
                <div className="input">
                    <h3>Bot Entered: </h3>
                    <input type="number" value={botNumbers.bf1} disabled={true} />
                    <input type="number" value={botNumbers.bf2} disabled={true} /> 
                    <input type="number" value={botNumbers.bf3} disabled={true} />
                </div>
                : null}
            {winner ? 
                <div className="explanation">
                    <h3>{winner}</h3> 
                    <p>
                        With resources above 12 deterministic strategies are not optimal.
                        For example, if resources were 6, (2, 2, 2) would be optimal as it at worst breaks even against other strategies,
                        and at best beats one. For resources equal to 13, choosing between (3, 5, 5), (3, 3, 7), and (1, 5, 7)
                        with 1/3 probability each is shown to be the optimal probabilistic strategy. Applications for this game in real life
                        include military and political strategy as well as strategic hiring decisions. One example of this is two companies 
                        vying over the same candidates, resuling in many reasonable offers or aggressive offers for a subset of candidates.
                    </p>
                </div>
            : null}
            {winner ? <FontAwesomeIcon icon={faRedo} onClick={clearState} className="shuffle"/> : null}
        </div>
    )
}

export default Blotto;
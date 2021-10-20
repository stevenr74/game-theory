import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

//need to check total on submit to ensure its equal to resources

const Blotto = () => {
    const resources = 13;
    const [total, setTotal] = useState(0);
    const [values,set_values] = useState({
        bf1:1,
        bf2:1,
        bf3:1,
    })
    
    const [maxValues,setMaxValues] = useState({
        bf1:11,
        bf2:11,
        bf3:11,
    })
    
    const values_handler = (e) => {
        let name= e.target.name;
        let value= e.target.value;
        const newValues = {
            ...values,
            [name]: value
        }
        set_values(newValues)
        calc_total(newValues) 
    }
    
    const calc_total = (newValues) => {
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
    

    return (
        <div className="centipede">
            <h2>Colonel Blotto Game</h2>
            <p>
                Two players distribute finite resources over several battlefields, with the player who
                allocated the most resources to a battlefield winning that battlefield. The payoff is
                equal to the total number of battles won. In this version, players will record three
                positive integers that add up to {resources}. The player who has two numbers
                higher than the opponents wins the round, other cases are a draw.
            </p>
            <form>
                <input type="number" id="bf1" value={values["bf1"]} name="bf1" min="1" max={maxValues["bf1"]} onInput={values_handler} />
                <input type="number"  id="bf2" value={values["bf2"]} name="bf2" min="1" max={maxValues["bf2"]} onInput={values_handler}/>
                <input type="number" id="bf3" value={values["bf3"]} name="bf3" min="1" max={maxValues["bf3"]} onInput={values_handler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Blotto;
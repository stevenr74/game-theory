import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';


const Blotto = () => {
    const resources = 13;

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


        </div>
    )
}

export default Blotto;
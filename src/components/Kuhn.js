import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const Kuhn = (props) => {


    return (
        <div className="centipede">
            <h2>Kuhn Poker</h2>
            <p>
                Kuhn Poker is an zero-sum imperfect-information game based on standard poker. Two players
                are dealt a card from a three card deck containing a King, Queen, and Jack. Players then place
                bets like in poker (calling/raising/folding), with the player with the highest card winning at showdown.
            </p>
        </div>
    )
}

export default Kuhn;
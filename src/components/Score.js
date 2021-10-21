import React from 'react'

const Score = (props) => {

    return (
        <div className="score">
            <h3>Winnings: ${props.score}</h3>
        </div>
    )
}

export default Score;
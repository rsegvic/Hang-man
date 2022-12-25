import React from 'react'

interface props{
    player: number
}

export const PlayerWon = ({player}: props) => {
  return (
    <div>
        {
            player === 1 ? 
            <h1>GUESSING PLAYER WON!!!!<br/>CONGRATULATIONS</h1>
            :
            <h1>SETTING PLAYER WON!!!! <br/>CONGRATULATIONS</h1>
        }
    </div>
  )
}

import React from 'react'
import SingleLife from './SingleLife';

interface props{
    lives: number;
}

const DisplayLives = ({lives}: props) => {


    
    return (
        <div className='lives-container'>
            {[...Array(lives)].map(() => <SingleLife />)}
        </div>
    )
}

export default DisplayLives

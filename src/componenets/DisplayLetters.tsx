import React from 'react'
import SingleLetter from './SingleLetter';

interface props{
    display: string[];
}

const DisplayLetters = ({display}: props) => {

    const len = String(display.length*70)+"px";

    return (
        <div style={{width: len}} className='letter-container'>
            {
                display.map((sl) => 
                    <SingleLetter letter={sl}/>
                )
            }
        </div>
    )
}

export default DisplayLetters
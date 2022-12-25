import React from 'react'

interface props{
    letter: string;
}

const SingleLetter = ({letter}: props) => {

    return (
        <div className='single-letter'>{letter !== "?" ? letter : ""}</div>
//        <div className='single-letter'></div>
    )
}

export default SingleLetter
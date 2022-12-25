import React from 'react'
import "./styles.css";


interface Props{
    inGame: boolean
    setinGame: React.Dispatch<React.SetStateAction<Boolean>>
}

const StartButton: React.FC<Props> = ({inGame, setinGame}: Props) => {

    const handleStartButton = (e: React.FormEvent) => {
        e.preventDefault();
        setinGame(true);
    }

    return (
        <div className='start-button-feald'>
            <button className='start-button' onClick = {(e) => handleStartButton(e)}>START</button>
        </div>
    )
}

export default StartButton
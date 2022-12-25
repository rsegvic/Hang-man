import React, { useEffect, useState } from 'react'
import DisplayLetters from './DisplayLetters'
import DisplayLives from './DisplayLives'
import LetterInput from './LetterInput'
import { PlayerWon } from './PLayerWon'
import WordInput from './WordInput'

const Game = () => {
    const [word, setWord] = useState<string[]>([]);
    const [guessed, setGuessed] = useState<string[]>([])
    const [display, setDisplay] = useState<string[]>("?".repeat(word.length).split(""));
    const [inGame, setInGame] = useState<boolean>(false);
    const [win, setWin] = useState(0);
    const [lives, setLives] = useState<number>(10);


    const checkWin = (): number => {
        if (word.length === 0)
            return 0;

        if (lives === 0)
            return 2;

        if (display.filter((sl) => sl === '?').length === 0){
            console.log(display);
            return 1;
        }
        
        return 0;
    }

    useEffect(() => {
        if (lives > 0)
            setInGame(word.length !== 0);
        else 
            setInGame(false);
    }, [word, lives])
    

    return (
    <div className='Game'>
        { !inGame && <WordInput word={word} setWord={setWord}/> }
        { inGame && <DisplayLives lives={lives} />}
        { inGame && <LetterInput guessed={guessed} setGuessed={setGuessed} display={display} setDisplay={setDisplay} word={word} lives={lives} setLives={setLives}/> }
        { inGame && <DisplayLetters display={display}/>}
        {
            win !== 0 &&
            <PlayerWon player={win}/>
        }

    </div>
  )
}

export default Game
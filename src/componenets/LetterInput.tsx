import React, { useRef, useState } from 'react'

interface props{
    guessed: string[],
    setGuessed: React.Dispatch<React.SetStateAction<string[]>>
    display: string[],
    setDisplay: React.Dispatch<React.SetStateAction<string[]>>
    word: string[],
    lives: number,
    setLives: React.Dispatch<React.SetStateAction<number>>
}

const check = (word: string): Boolean => {
    return /^[a-zA-Z]+$/.test(word);
}


const LetterInput = ({guessed, setGuessed, display, setDisplay, word, lives, setLives}: props) => {
    const [temp, setTemp] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [showDLAlert, setShowDLAlert] = useState<boolean>(false);
    const [showWLAlert, setShowWLAlert] = useState<boolean>(false);
    const handleGuess = (e: React.FormEvent) => {
        e.preventDefault();
        const add: string = temp.toLowerCase();
        setShowWLAlert(false);
        setShowDLAlert(false);
        if (inputRef.current !== null){
            inputRef.current.value = "";
            inputRef.current.blur();
        }
        if (!check (temp)){
            setShowWLAlert(true);
            return;
        }
        if (guessed.filter((ch) => ch === add).length >= 1){
            setShowDLAlert(true);
            return;
        }
        setGuessed([...guessed, add]);
        setTemp("");
        let cr: boolean = false;
        setDisplay(word.map((sl, index) => {
            if (sl === add)
                cr = true;
            return sl === add ? sl : display[index];
        }));
        if (!cr){
            setLives(lives-1);
        }
    }    

    return (
        <div className='input-word-container'>
            <h1>GUESS THE LETTER</h1>
            <form action="" className='letter-input-feald' onSubmit={(e) => handleGuess(e)}>
                <input type="text" ref={inputRef} className='letter-input' maxLength={1}  onChange={(e) => setTemp(e.target.value)}/>
            </form>
            {
                showDLAlert && <label htmlFor="bad-word" className='bad-word-warning'>You've already entered that letter!</label>
            }
            {
                showWLAlert && <label htmlFor="bad-word" className='bad-word-warning'>Please enter an English letter!</label>
            }
            <div className='letter-submit-feald'>
                <button className='letter-submit'>GUESS</button>
            </div>
        </div>
    )
}


export default LetterInput
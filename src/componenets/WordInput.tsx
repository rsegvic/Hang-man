import React, { useEffect, useRef, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface props{
    word: string[],
    setWord: React.Dispatch<React.SetStateAction<string[]>>,
}

const check = (word: string): Boolean => {
    return /^[a-zA-Z]+$/.test(word);
}

const WordInput = ({word, setWord}: props) => {
    const [temp, setTemp] = useState<string>("")
    const [isGood, setIsGood] = useState<boolean>(true);
    const [isShown, setIsShown] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSet = (e: React.FormEvent) => {
        e.preventDefault()
        inputRef.current?.blur();
        if (!check (temp)){
            setIsGood(false);
            return;
        }
        console.log ("proso pizda ti materina");
        setIsGood(true);
        setWord(temp.toLowerCase().split(""));
        setTemp("");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsGood(true);
        }, 3000);
        
        return () => {
            clearTimeout(timer);
        }
    }, [isGood])
    

    return (
    <div className='input-word-container'>
        <h1>ENTER A WORD</h1>
        <form action="" className='word-input-feald' onSubmit={(e) => handleSet(e)}>
            <input ref={inputRef} type={isShown ? "text" : "password"} className='word-input' maxLength={10}  onChange={(e) => setTemp(e.target.value)}/>
            {
                isShown ? <div className='show-word' onClick={() => setIsShown(false)}><AiFillEye /></div> :
                <div className='show-word' onClick={() => setIsShown(true)}><AiFillEyeInvisible /></div>
            }
            <button className='word-submit'>SET</button>
        </form>
        {
            !isGood && <label htmlFor="bad-word" className='bad-word-warning'>Please enter a word consisting only of english letters!</label>
        }
    </div>
  )
}

export default WordInput

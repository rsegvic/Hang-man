import React, { useState } from 'react';
import './App.css';
import Game from './componenets/Game';
import RestartButton from './componenets/RestartButton';
import StartButton from './componenets/StartButton';

const App:React.FC = () => {
    const [inGame, setinGame] = useState<Boolean>(false);
    return (
    <div className="App">
        {            
            !inGame && <StartButton inGame={inGame} setinGame={setinGame}/>
        }
        {
            !inGame && <h1 className='big-title'>HANG-MAN</h1>
        }
        {
            inGame && <Game />
        }
        {
            inGame && <RestartButton />
        }
    </div>
  );
}

export default App;

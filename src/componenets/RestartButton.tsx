import React from 'react'

const RestartButton = () => {
    const handleRestart = () => {
        window.location.reload();
    }
    return (
    <div className='restart-button-feald'>
        <button className='restart-button' onClick={() => handleRestart()}>RESTART</button>
    </div>
  )
}

export default RestartButton
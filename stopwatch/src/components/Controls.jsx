import React from 'react'
import styles from './Timer.module.css'
const Controls = ({ timerOn, onStart, onStop, resetTimer, addLap }) => {
  return (
    <div className={styles.controls}>
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={addLap}>Volta</button>}
        
        <button onClick={resetTimer}>Zerar</button>
    </div>
  )
}

export default Controls
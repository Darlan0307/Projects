import React, { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import Display from './Display'
import Controls from './Controls'
import LapList from './LapList'

const Timer = () => {

  const [milliSeconds,setMilliSeconds] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [lapList, SetLapList] = useState([])

  const timeFormat = () => {
    const minutes = ("0" + Math.floor(milliSeconds / 60000) % 60).slice(-2)
    const seconds = ("0" + Math.floor(milliSeconds / 1000 ) %60).slice(-2)
    const centMilliSeconds = ("0" + Math.floor(milliSeconds / 10) % 100).slice(-2)
    return `${minutes}:${seconds}:${centMilliSeconds}`;
  }

  const startTimer = (interval) => {
    return setInterval(()=>{
      setMilliSeconds((prevTimer) => prevTimer + 10)
    },10)
  }

  const stopTimer = (interval) => {
    clearInterval(interval)
    return interval
  }

  const resetTimer = () =>{
    
    setMilliSeconds(0)
    setTimerOn(false)
    SetLapList([])
  }

  const addLap = () =>{
    SetLapList([...lapList, timeFormat()])
  }

  useEffect(()=>{
    let interval = null;

    if(timerOn){
      interval = startTimer(interval)
    }else{
      interval = stopTimer(interval)
    }

    return () => stopTimer(interval);
  },[timerOn])
  
  return (
    <main className={styles.container_timer}>
        <Display timer={timeFormat()}/>
        <Controls 
        resetTimer={resetTimer}
        timerOn = {timerOn}
        onStart={() => setTimerOn(true)} 
        onStop={()=>setTimerOn(false)}
        addLap={addLap}
        />
        
        <LapList lapList={lapList}/>
    </main>
  )
}

export default Timer
import React, { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import Display from './Display'
import Controls from './Controls'
import LapList from './LapList'
import OldLapList from './OldLapList'

const Timer = () => {

  const [milliSeconds,setMilliSeconds] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [lapList, SetLapList] = useState([])
  const [oldLapList,setOldLapList] = useState([])
  const [allOldLapList,setAllOldLapList] = useState([])

  const setLocalStorage = (data) => {
    setOldLapList((prevLapList) =>{
      const newOldLapList = [...prevLapList, data];
      localStorage.setItem('LapLists', JSON.stringify(newOldLapList));
      return newOldLapList
    })
  }

  const getLocalStorage = () => {
    const oldData = JSON.parse(localStorage.getItem('LapLists')) ?? []  
      setAllOldLapList(oldData)
  }

  useEffect(()=>{
    getLocalStorage()
  },[timerOn])

  const timeFormat = () => {
    const minutes = ("0" + Math.floor(milliSeconds / 60000) % 60).slice(-2)
    const seconds = ("0" + Math.floor(milliSeconds / 1000 ) % 60).slice(-2)
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
    setLocalStorage(lapList)
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
    <>
    
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

        <OldLapList allOldLapList={allOldLapList}/>
    </>
  )
}

export default Timer
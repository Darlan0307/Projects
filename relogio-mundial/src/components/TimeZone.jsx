import React, { useEffect, useState } from 'react'

const TimeZone = ({ zona }) => {

    const [time,setTime] = useState("")

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            const date = new Date();

            const options = {
                timeZone: zona,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }

            const timeString = date.toLocaleTimeString("en-US",options);
            setTime(timeString)
            
        },1000)

        return () => clearInterval(intervalId)
    },[zona])


  return (
    <div>
        
        <h2>{zona}</h2>
        <h3>{time}</h3>
        <hr />
    </div>
  )
}

export default TimeZone
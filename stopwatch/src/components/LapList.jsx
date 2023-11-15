import React from 'react'
import styles from './Timer.module.css'
const LapList = ({lapList}) => {
  return (
    <div className={styles.laplist}>
        <h3>Voltas:</h3>
        <ul>
          {lapList.map((lap, index)=> (
            <li key={index}>Volta {index + 1}: {lap}</li>
          ))}
        </ul>
    </div>
  )
}

export default LapList
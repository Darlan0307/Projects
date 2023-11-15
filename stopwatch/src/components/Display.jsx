import React from 'react'
import styles from './Timer.module.css'
const Display = ({timer}) => {
  return (
    <div className={styles.display}>{timer}</div>
  )
}

export default Display
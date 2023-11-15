import React from 'react'
import styles from './Timer.module.css'

const OldLapList = ({ allOldLapList }) => {
    const dataHoraAtual = new Date();

  return (
    <div className={styles.oldlaplist}>
        <h3>Todas as Voltas</h3>
        {allOldLapList && allOldLapList.length > 0 ? (allOldLapList.map((lapList, index) => (
    <div key={index + 1}>
        <h3>Dia: {dataHoraAtual.getDate()} Lista: {index + 1} </h3>
        <ul>
            {lapList.map((lap, lapIndex) => (
                <li key={lapIndex + 1}>Volta {lapIndex + 1}: {lap}</li>
            ))}
        </ul>
    </div>
)))
 : (
    <p>Não há voltas</p>
 )
}
    </div>
  )
}

export default OldLapList
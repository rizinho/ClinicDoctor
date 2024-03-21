import styles from './App.module.css'
import React from 'react'

const App = () => {
  return ( 

    <div className={styles.main}>
        <div className={styles.header}>

          <button className={styles.bDuvidas}>Duvidas</button>
          <button className={styles.bSac}>SAC</button>
          <button className={styles.bConfig}>Configurações</button>
          <button className={styles.bLogin}>Login</button>

        </div>
    </div>
  )
}

export default App;
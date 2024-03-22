import styles from './App.module.css'
import React from 'react'
import icon from './assets/logotcc.png'
import imgContainer from './assets/imgContainer.png'
import logoContainer from './assets/logoContainer.png'

const App = () => {
  return ( 

    <body>

        <div className={styles.header}>

          <div className={styles.logo}>

            <img  className={styles.icon} src={icon} alt='Imagem do logo'/>

            <h1 className={styles.txtLog}>Consult Doctor</h1>

          </div>

          <div className={styles.navBar}>

            <button className={styles.link}>SAC</button>
            <button className={styles.link}>Configurações</button> 
            <button className={styles.bLogin}>Login</button>
            <button className={styles.bLogin}>Cadastro</button>

          </div>

        </div>

        

       <div className={styles.container}>
       <img className={styles.backgroundContainer} src={imgContainer} />
          <img className={styles.logoContainer} src={logoContainer}/>
       </div>

       <div className={styles.main}>

      
       </div>

        

     </body>
  )
}

export default App;
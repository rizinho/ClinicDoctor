import styles from './App.module.css'
import React from 'react'

/*imagens*/
import icon from './assets/logotcc.png'
import img1 from './assets/img1.jpg'
/*Fim imagens*/

const App = () => {
  return ( 

    <div className={styles.main}>
        <div className={styles.header}>

          <img  className={styles.icon} src={icon} alt='Imagem do logo'/>

          <h1 className={styles.txtLog}>Consult Doctor</h1>

          <button className={styles.bDuvidas}>Dúvidas</button>
          <button className={styles.bSac}>SAC</button>
          <button className={styles.bConfig}>Configurações</button>
          <button className={styles.bLogin}>Login</button>

        </div>

        {/*Body*/}

       <div className={styles.container}>

         <img className={styles.imgContainer} src={img1} alt='imagem conteúdo'/>

       </div>

        {/*FIMbody*/}

    </div>
  )
}

export default App;
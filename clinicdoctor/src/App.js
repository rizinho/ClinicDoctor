import styles from './App.module.css'
import React from 'react'

/*imagens*/
import icon from './assets/logotcc.png'
import img1 from './assets/img1.jpg'
/*Fim imagens*/

const App = () => {
  return ( 

    <body>

        <div className={styles.header}>

          <div className={styles.logo}>

            <img  className={styles.icon} src={icon} alt='Imagem do logo'/>

            <h1 className={styles.txtLog}>Consult Doctor</h1>

          </div>

          <div className={styles.navBar}>

            <button className={styles.link}>Dúvidas</button>
            <button className={styles.link}>SAC</button>
            <button className={styles.link}>Configurações</button> 
            <button className={styles.bLogin}>Login</button>
            <button className={styles.bLogin}>Cadastro</button>

          </div>

        </div>

        {/*Body*/}

       <div className={styles.container}>

         {/* <img className={styles.imgContainer} src={img1} alt='imagem conteúdo'/> */}

       </div>

        {/*FIMbody*/}

        </body>
  )
}

export default App;
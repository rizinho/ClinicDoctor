import styles from './App.module.css';
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Importe Routes também
import Cadastro from './cadastro'; // Corrija o nome do componente para começar com letra maiúscula





import icon from './assets/logotcc.png';
import imgContainer from './assets/imgContainer.png';
import logoContainer from './assets/logoContainer.png';

const App = () => {
  return (
    <Router>
      <div>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.icon} src={icon} alt='Imagem do logo' />
            <h1 className={styles.txtLog}>Consult Doctor</h1>
          </div>
          <div className={styles.navBar}>
            <button className={styles.link}>SAC</button>
            <button className={styles.link}>Configurações</button>
            <button className={styles.bLogin}>Login</button>
            <Link to="/cadastro" className={styles.bLogin}>Cadastro</Link>
          </div>
        </div>

        <div className={styles.container}>
          <img className={styles.backgroundContainer} src={imgContainer} />
          <img className={styles.logoContainer} src={logoContainer} />

          <div className={styles.caixa}>
            <p className={styles.caixaText}>Consult Doctor é um site que permite agendar consultas médicas online de forma rápida e fácil. Os usuários podem escolher entre uma variedade de especialidades, ver a disponibilidade de horários em tempo real. O site também fornece informações detalhadas sobre os médicos e envia lembretes automáticos de consulta. É uma solução conveniente para acessar cuidados médicos de qualidade sem sair de casa.</p>
          </div>

          <div className={styles.caixaTitulo}>
            <p className={styles.titleText}>SOBRE NÓS</p>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.ajuda}>
            <p className={styles.textAjuda}> Olá, como podemos te ajudar?</p>
          </div>
          <div className={styles.caixaContainer}>
            <div className={styles.caixa1}>
              <p className={styles.titleBox1}>Fale conosco</p>
              <p className={styles.textBox1}>Telefone: (14) 99887766<br /><br />Whatsapp: (14) 99887766<br /><br />E-mail: beta@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Wrap all your routes within a Routes component */}
        <Routes>          
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

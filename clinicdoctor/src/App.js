import React from 'react'

import './container.css'
import './cabeçalho.css'
import './rodape.css'

const App = () => {
  return ( 

    <div className="main">
      <header>

         <div className="headerContainer">
           <h1 className="title"> ClinicDoctor </h1>
         </div>

       </header>

       <div className='rodape'>
         <p>conteudo rodape</p>
       </div>

    </div>
      
  );
}

export default App;
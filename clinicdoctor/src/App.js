import React from 'react'

import con from './container.css'
import hea from './header.css'

function App() {
  return ( 
    <div className={con.container}>

       <div className={hea.headerContainer}>
          <h1 className={hea.title}> ClinicDoctor </h1>
       </div>

    </div>

  );
}

export default App;
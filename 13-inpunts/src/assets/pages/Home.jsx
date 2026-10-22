import React, { useState } from 'react'

function Home() {
    const [inputsLogin, setInputsLogin] = useState('')
      function EfetuarLogin() {
        if(inputsLogin === 'admin') {
            alert('Login efetuado com sucesso!')
        } else {
            alert('Login ou senha incorretos!')
        }  
    }
    
  return (
    <div className='home'>
        <h1>Inputs Controlados</h1>
     <label htmlFor="">Login</label>

      <input type="text"  
        value={inputsLogin}
        onChange={(e) => setInputsLogin(e.target.value)}
        
      />
      <button onClick={EfetuarLogin}>Entrar</button>
      <p>
        {/*{inputsLogin}*/}

        </p>

     
    </div>
  )
}

export default Home
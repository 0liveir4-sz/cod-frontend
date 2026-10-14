
import './App.css'
import Capitao from './components/Capitao'
import Eleicao from './components/Eleicao'
import Jogo from './components/jogo'
import PesoIdade from './components/PesoIdade'
import Pousada from './components/Pousada'
import Recrutamento from './components/Recrutamento'
import Sarumano from './components/Sarumano'

function App() {


  return (
   <div className="app">
      <h1>
        03 Estados e Componentes
      </h1>
        <h2>#0030</h2>
        <Sarumano />
        <Recrutamento />
           <Capitao />
         <hr />
        
        <h2>#0027.sq05</h2>

       <PesoIdade />
        <Eleicao />
       <Pousada />
        <Jogo />

   </div>
  )
}

export default App

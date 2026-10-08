
import './App.css'
import Eleicao from './components/Eleicao'
import Jogo from './components/jogo'
import PesoIdade from './components/PesoIdade'
import Pousada from './components/Pousada'

function App() {


  return (
   <div className="app">
      <h1>
        03 Estados e Componentes
      </h1>
       <PesoIdade />
        <Eleicao />
       <Pousada />
        <Jogo />

   </div>
  )
}

export default App

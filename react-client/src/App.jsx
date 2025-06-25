import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About1 from './components/About1'
import About2 from './components/About2'
import About3 from './components/About3'
import Iniciativas from './components/Iniciativas'
import Footer from './components/Footer'

const App = () => {
  const [explainState, setExplainState] = useState(0)
      
  const explainOptions = [
      {
          text: "Menos teoria, mais ação. É hora de modelar, construir, programar e testar pra valer. Seus projetos, suas regras.",
          color: "rgba(255, 208, 33, 0.35)"
      },
      {
          text: "Suas paixões, suas histórias e até suas ideias mais malucas são bem-vindas. Use a criatividade para deixar sua marca no mundo.",
          color: "rgba(60, 152, 244, 0.35)"
      },
      {
          text: "Troque ideias, encontre parceiros, junte seu talento ao de outros e descubra o poder de criar em equipe.",
          color: "rgba(54, 202, 86, 0.35)"
      },
      {
          text: "Desmonte, investigue e teste os limites. Aqui, sua curiosidade é o ponto de partida para as maiores descobertas.",
          color: "rgba(251, 90, 74, 0.35)"
      },
  ]

  return (
    <>
      <Header/>
      <About1/>
      <About2 explainState={explainState} setExplainState={setExplainState} explainOptions={explainOptions}/>
      <About3 explainState={explainState} explainOptions={explainOptions}/>
      <Iniciativas/>
      <Footer explainState={explainState} explainOptions={explainOptions}/>
    </>
  )
}

export default App

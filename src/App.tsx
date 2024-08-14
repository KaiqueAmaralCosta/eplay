import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/index'
import { GlobalCss } from '../src/styles'

import Rotas from './routes'

// configuracao das todas de link

function App() {
  return (
    // as utilizacoes do react-router-dom devem ser usadas dentro de um emcapsulamento de uma tag do react-router-dom no App.tsx/App.jsx
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App

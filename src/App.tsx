import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/index'
import { GlobalCss } from '../src/styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { Store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    // as utilizacoes do react-router-dom devem ser usadas dentro de um emcapsulamento de uma tag do react-router-dom no App.tsx/App.jsx
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App

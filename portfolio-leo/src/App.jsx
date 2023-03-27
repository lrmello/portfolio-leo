import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial'
import './styles/global.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Router>
          <Routes>
            <Route path='' element={<PaginaInicial/>}/>
            {/* <Route path='' element={<FaleConosco/>}/> */}
          </Routes>
      </Router>
    </div>
  )
}

export default App

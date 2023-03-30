import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial'
import FaleConosco from './Pages/FaleConosco/FaleConosco'
import './styles/global.css'

function App() {

  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<PaginaInicial/>}/>
            <Route path='/faleconosco' element={<FaleConosco/>}/>
          </Routes>
      </Router>
      
    </div>
  )
}

export default App

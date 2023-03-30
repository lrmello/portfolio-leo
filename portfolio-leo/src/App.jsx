import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial'
import FaleConosco from './Pages/FaleConosco/FaleConosco'
import Conhecendo from './Pages/Conhecendo/Conhecendo'
import Projetos from './Pages/Projetos/Projetos'
import Hobbies from './Pages/Hobbies/Hobbies'
import './styles/global.css'

function App() {

  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<PaginaInicial/>}/>
            <Route path='/faleconosco' element={<FaleConosco/>}/>
            <Route path='/conhecendo' element={<Conhecendo/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
            <Route path='/hobbies' element={<Hobbies/>}/>
          </Routes>
      </Router>
      
    </div>
  )
}

export default App


import { BrowserRouter as Router, Route, Routes,  Link} from 'react-router-dom'
//Pages
import Home from './Pages/Home'
import Project from './Pages/project'
import About from './Pages/About'
import Contact from './Pages/contact'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'

//Utils
import ScrollToTop from './Utils/ScrollTop'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'

function App() {

  const appContext = useContext(AppContext)
  if (appContext.loading){
      return <LoadingSpinner/>
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App

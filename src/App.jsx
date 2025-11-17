
import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Admin from './Admin'
import Header from './Header'

function App() {
  

  return (
    <>
  <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<Admin/>} />
     </Routes>
    </>
  )
}

export default App

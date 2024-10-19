
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokemonInfo from './pages/PokemonInfo'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/pokemon/:name' element={<PokemonInfo/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
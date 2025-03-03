import './App.css'
import AutoScrollToTop from './Components/AutoScrollToTop'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Pricing from './Pages/Pricing/Pricing'
import Training from './Pages/Training/Training'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router >
        <AutoScrollToTop>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/training' element={<Training />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </AutoScrollToTop>
      </Router>
    </>
  )
}

export default App

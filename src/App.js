import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactUs from './pages/contactus/ContactUs'
import Submitted from './pages/submitted/Submitted'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/contactus'
        element={<ContactUs />}
      />
      <Route
        path='/submitted'
        element={<Submitted />}
      />
    </Routes>
  )
}

export default App
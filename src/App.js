import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactUs from './pages/contactus/ContactUs'
import Submited from './pages/Submited'

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
        path='/submited'
        element={<Submited />}
      />
    </Routes>
  )
}

export default App
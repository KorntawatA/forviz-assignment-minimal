import Login from './Login'
import UserMenu from './UserMenu'
import ProductMenu from './ProductMenu'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/users" element={<UserMenu />}></Route>
          <Route path="/products" element={<ProductMenu />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

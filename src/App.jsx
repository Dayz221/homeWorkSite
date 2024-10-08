import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/refresh.css'
import './styles/app.css'
import UserPage from './pages/userPage.jsx'
import Register from './pages/register.jsx'
import Login from './pages/login'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    window.Telegram.WebApp.expand()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

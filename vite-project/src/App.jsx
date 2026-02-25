import './App.css'
import Main from './Component/Main/Main.jsx'
import Menu from './Component/Menu/Menu.jsx'
import Discover from './Component/Discover/Discover.jsx'
import Albums from './Component/Albums/Albums.jsx'
import Profile from './Component/Profile/Profile.jsx'
import Login from './Component/Auth/Login.jsx'
import SignUp from './Component/Auth/SignUp.jsx'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="app-layout">
      <Menu />
      <div className="app-layout-content">
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* Auth pages - full screen, không có Menu */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Main app - có Menu sidebar */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Main />} />
        <Route path="discover" element={<Discover />} />
        <Route path="albums" element={<Albums />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

import './App.css'
import Main from './Component/Main/Main.jsx'
import Menu from './Component/Menu/Menu.jsx'
import Discover from './Component/Discover/Discover.jsx'
import Albums from './Component/Albums/Albums.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="app-layout">
      <Menu />
      <div className="app-layout-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

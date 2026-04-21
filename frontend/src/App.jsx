import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { BookingProvider } from './context/BookingContext.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx';
// Placeholder imports (create later)

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>

          <Navbar /> {/* 🔥 global navbar */}

          <div className="min-h-screen bg-gradient-to-br from-[#f4f5f0] via-white to-[#eef0e6]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>

        </BookingProvider>
      </AuthProvider>
    </Router>
  )
}

export default App


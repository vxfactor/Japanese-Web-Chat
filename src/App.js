import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  
  // Simple auth state mock - in a real app, use Firebase Auth
  const handleLogin = (userData) => {
    setUser(userData);
  };
  
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      <Header user={user} onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={user ? <Navigate to="/chat" /> : <Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/chat" /> : <Register onRegister={handleLogin} />} 
          />
          <Route 
            path="/chat" 
            element={user ? <Chat user={user} /> : <Navigate to="/" />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user, onLogout }) => {
  const [language, setLanguage] = useState('jp'); // 'jp' or 'en'
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'jp' ? 'en' : 'jp');
  };
  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            {language === 'jp' ? '日本語ウェブチャット' : 'Japanese Web Chat'}
          </Link>
        </div>
        
        <div className="header-right">
          {user ? (
            <div className="user-nav">
              <span className="welcome-text">
                {language === 'jp' ? 'ようこそ、' : 'Welcome, '} {user.username}
              </span>
              <button className="btn btn-secondary" onClick={onLogout}>
                {language === 'jp' ? 'ログアウト' : 'Logout'}
              </button>
            </div>
          ) : (
            <nav className="nav">
              <Link to="/" className="nav-link">
                {language === 'jp' ? 'ログイン' : 'Login'}
              </Link>
              <Link to="/register" className="nav-link">
                {language === 'jp' ? '登録' : 'Register'}
              </Link>
            </nav>
          )}
          
          <div className="language-toggle">
            <button 
              className={`language-toggle-btn ${language === 'jp' ? 'active' : ''}`}
              onClick={toggleLanguage}
            >
              日本語
            </button>
            <span className="lang-separator">|</span>
            <button 
              className={`language-toggle-btn ${language === 'en' ? 'active' : ''}`}
              onClick={toggleLanguage}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
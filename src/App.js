import React from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Categories from './pages/Categories';
import Leaderboards from './pages/Leaderboards';
import Home from './pages/Home';
import MusicbyCategory from './pages/MusicbyCategory';
import TrackDetail from './pages/TrackDetail';
import ArtistDetail from './components/ArtistDetail';
import ProfileDetail from './pages/ProfileDetail';

function App() {
  return (
    <>
      <div className="App">
        <header>🎵 Music App</header>
        <div className="content">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<TrackDetail />} />
          <Route path="/artist/:id" element={<ProfileDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:genre" element={<MusicbyCategory />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>404 Not found</div>} />
          </Routes>
        </div>
    <footer>
    <div className="containernav">
        <NavLink to="/" className="navbar">
          Home
        </NavLink>
        <NavLink to="/categories" className="navbar">
          Categories
        </NavLink>
        <NavLink to="/leaderboards" className="navbar">
          Leaderboards
        </NavLink>
        <NavLink to="/about" className="navbar">
          About
        </NavLink>
      </div>
    </footer>
      </div>
    </>
  );
}

export default App;

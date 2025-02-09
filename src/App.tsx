import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import AppRepository from './pages/AppRepository';
import Documentation from './pages/Documentation';
import AboutMe from './pages/AboutMe';
import './App.css';
import './global.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/app-repository" element={<AppRepository />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
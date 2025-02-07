import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import AppRepository from './pages/AppRepository';
import Documentation from './pages/Documentation';
import AboutMe from './pages/AboutMe';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
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
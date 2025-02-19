import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Blog from './components/Blog/Blog';
import AppRepository from './components/AppRepository/AppRepository';
import Documentation from './components/Documentation/Documentation';
import AboutMe from './components/AboutMe/AboutMe';
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
      <Footer />
    </div>
  );
};

export default App;
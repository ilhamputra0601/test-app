import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog';

function App() {
  return (
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
     </Router>
  );
}

export default App;

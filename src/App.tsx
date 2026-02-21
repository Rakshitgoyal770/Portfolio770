import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './componants/Home'
import About from './componants/About'
import Contact from './componants/Contact'
import Projects from './componants/Project'
import {Navbar} from './componants/Navbar'



export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">

        <div className="fixed top-0 left-0 w-full z-50 p-6">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

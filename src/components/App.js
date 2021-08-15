import Home from '../pages/Home';
import '../styles/App.css';
import Nav from './NavBar';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;

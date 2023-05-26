import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar home="Home" features="Features" pricing="Pricing" about="About" contact="Contact"/>
    <Home/>


    </div>
  );
}

export default App;

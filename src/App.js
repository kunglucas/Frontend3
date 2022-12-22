import Home from './components/Home';
import Navbar from './components/Navbar';
import Calc from './components/Calc';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="content">
    <Home/>
    <Calc/>
      {/* /<Form/> */}
    </div>
    </div>
  );
}

export default App;
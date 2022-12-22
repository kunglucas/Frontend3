import Home from './components/Home';
import Navbar from './components/Navbar';
import Calc from './components/Calc';
import Form from './components/Form';
import Delete from './components/Delete';
import UsersInfo from './components/UsersInfo';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
          <div className="App">
    <div className="content">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
        <Calc/>
      </Route>
      <Route exact path="/create">
        <Form />
      </Route>
      <Route exact path="/blogs/:id">
          <UsersInfo />
      </Route>
      <Route exact path="/success">
          <Delete />
      </Route>
    </Switch>
      {/* /<Form/> */}
    </div>
    </div>
    </Router>
  );
}

export default App;
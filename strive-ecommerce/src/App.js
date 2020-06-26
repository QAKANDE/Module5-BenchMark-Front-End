import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import NavBar from './components/NavBar'
import BackOffice from './components/BackOffice'
import Details from './components/Details'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
   <Route path="/" exact component={Home}></Route>
   <Route path="/backoffice/" exact component={BackOffice}></Route>
   <Route path='/details/:id' exact  component={Details}></Route>
      </Router>
    </div>
  );
}

export default App;

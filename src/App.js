import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import { GlobalProvider } from './context/Global';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
      <GlobalProvider>
         <Router>
          <h1>Nav</h1>
      <Route exact path="/" component= {Home} />
      <Route path="/add" component= {AddUser} />
      <Route path="/edit/:id" component= {EditUser} />
          </Router>
      </GlobalProvider>
     
    </div>
  );
}

export default App;

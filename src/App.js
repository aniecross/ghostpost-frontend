import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Posts from './components/Posts'
import Boasts from './components/Boasts'
import Roasts from './components/Roast'
import Score from './components/Score'
import CreatePost from './components/CreatePost'

function App(){
  return(
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <Link className="navbar-brand" to="/">Home</Link> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/roasts">Roasts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/boasts">Boasts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/score">Score Sort</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addpost">Add Post</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addpost">
            <CreatePost />
          </Route>
          <Route path="/boasts">
            <Boasts />
          </Route>
          <Route path="/roasts">
            <Roasts />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App;

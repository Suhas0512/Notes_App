import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Notes from './components/Notes/Notes';
import Category from './components/Categories/Category';
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Link to ="/">Home</Link>
        <Link to ="/notes">Notes</Link>
        <Link to ="/categories">Categories</Link>
        <Route path="/notes" component={Notes} />
        <Route path="/categories" component={Category} />
      </BrowserRouter>
      </div>
    );
  }
  
  export default App;
import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import NotesNew from './components/Notes/New';
import NotesEdit from './components/Notes/Edit';
import Notes from './components/Notes/Notes';
import Category from './components/Categories/Category';
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Link to ="/">Home</Link>
        <Link to ="/notes">Notes</Link>
        <Link to ="/categories">Categories</Link>

        <Route path="/" component={NotesNew} exact={true}/>
        <Route path="/notes" component={Notes} exact={true} />
        <Route path="/notes/:id" component={NotesEdit} />
        <Route path="/categories" component={Category} exact={true} />
      </BrowserRouter>
      </div>
    );
  }
  
  export default App;
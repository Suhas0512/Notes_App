import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import NotesNew from './components/Notes/New';
import NotesEdit from './components/Notes/Edit';
import Notes from './components/Notes/Notes';
import Category from './components/Categories/Category';
import UserRegistration from './components/Users/userRegistration';
import { connect } from 'react-redux'
import UserLogin from './components/Users/userLogin';
function App(props) {
    return (
      <div className="App">
        <BrowserRouter>
        {
          Object.keys(props.user).length > 0 ?
          <div>
          <Link to ="/notes">Notes</Link>
          <Link to ="/categories">Categories</Link></div>:
          <div>
          <Link to="/">Registration</Link>
          <Link to="/login">Login</Link>
        </div>
        }
        <Route path="/" component={UserRegistration} exact={true}/>
        <Route path="/login" component={UserLogin}/>

        <Route path="/notes" component={Notes} exact={true} />
        <Route path="/notes/:id" component={NotesEdit} />
        <Route path="/categories" component={Category} exact={true} />
      </BrowserRouter>
      </div>
    );
  }
  const mapStateToProps = (state) => {
    return {
      user : state.user
    }
  }
  
  export default connect(mapStateToProps) (App);
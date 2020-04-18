import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import NotesNew from './components/Notes/New';
import NotesEdit from './components/Notes/Edit';
import Notes from './components/Notes/Notes';
import Category from './components/Categories/Category';
import { connect } from 'react-redux'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { startLogout } from './actions/userAction';
import Swal from 'sweetalert2';
function App(props) {
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Logged Out',
          'success'
        )
        props.dispatch(startLogout())
      }
    })
  }
    return (
        <BrowserRouter>
        <div className="container">
      {
        Object.keys(props.user).length==0?(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <a className="navbar-brand ">Notes-App</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/register">Register</Link></li>
            </ul>
            </div>
            </nav>
          </div>
        ):(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <a className="navbar-brand">Notes App</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="">Home</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/notes">Notes</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/categories">categories</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" onClick={handleLogout}>logout</Link></li>
            </ul>
            </div>
            </nav>
          </div>
        )
      }
        {Object.keys(props.user).length!=0 && <Route path="/" component={NotesNew} exact={true}/>}
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/notes" component={Notes} exact={true} />
        <Route path="/notes/:id" component={NotesEdit} />
        <Route path="/categories" component={Category} exact={true} />
      </div>
      </BrowserRouter>
    );
  }
  const mapStateToProps = (state) => {
    return {
      user : state.user
    }
  }
  
  export default connect(mapStateToProps) (App);
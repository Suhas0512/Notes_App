import React from 'react';
import { connect } from 'react-redux'
import { startRemoveNotes } from '../../actions/notesAction';
import { Link } from 'react-router-dom';
function Notes(props){
    const handleRemove = (id) => {
        const confirmRemove =  window.confirm("Are you sure?")
        if(confirmRemove) {
            props.dispatch(startRemoveNotes(id))
        }
    }
    return(
        <div>
            <h2>Listing Notes</h2>
            {
            props.notes &&props.notes.map(ele=>{
            return <li key={ele._id}>{ele.title} belongs to {ele.category.name}
             <button><Link to={`/notes/${ele._id}`}>Edit</Link></button>
            <button onClick={()=>{handleRemove(ele._id)}}>remove</button></li>
                })
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        notes:state.notes,
        categories:state.categories
    }
}
export default connect(mapStateToProps)(Notes)
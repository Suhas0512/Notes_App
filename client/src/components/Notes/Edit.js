import React from 'react'
import { connect } from 'react-redux'
import { startUpdateNote } from '../../actions/notesAction'
import Form from '../Form/Form'

function NotesEdit(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        props.dispatch(startUpdateNote(formData,id))
    }
    return (
        <div>
        <h2>Edit Note</h2>
            <Form handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(NotesEdit)
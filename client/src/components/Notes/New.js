import React from 'react' 
import { connect } from 'react-redux'
import { startAddNotes } from '../../actions/notesAction'
import Form from '../Form/Form'

function NotesNew(props) {
    const handleSubmit = (formData) => {
        props.dispatch(startAddNotes(formData))
    }

    return (
        <div>
                <h2>Add Notes</h2>
                <Form handleSubmit={handleSubmit}/>
            </div>
    )
}

export default connect()(NotesNew)
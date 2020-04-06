import React from 'react';
import { connect } from 'react-redux'
function Notes(props){
    return(
        <div>
            <h2>Listing Notes</h2>
            {
                props.notes.map(ele=>{
                return <li key={ele._id}>{ele.title}</li>
                })
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        notes:state.notes
    }
}
export default connect(mapStateToProps)(Notes)
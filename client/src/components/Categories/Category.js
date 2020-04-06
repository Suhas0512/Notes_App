import React from 'react';
import { connect } from 'react-redux'
function Category(props){
    return(
        <div>
            <h2>Listing Category</h2>
            {
                props.category.map(ele=>{
                return <li key={ele._id}>{ele.name}</li>
                })
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        category:state.categories
    }
}
export default connect(mapStateToProps)(Category)
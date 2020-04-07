import React from 'react';
import { connect } from 'react-redux'
import { startAddCategory, startRemoveCategory } from '../../actions/categoriesAction';
class Category extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.dispatch(startAddCategory(formData))
    }
    handleRemove = (id) => {
        const note = this.props.notes.filter(note=>note.category._id == id)
        if(note.length){
            alert('there are notes in this category')
        }
        else{
            this.props.dispatch(startRemoveCategory(id))
        }
    }
    render(){
    return(
        <div>
            <h2>Listing Category</h2>
            {
                this.props.category.map(ele=>{
                return <li key={ele._id}>{ele.name}
                <button onClick={()=>{this.handleRemove(ele._id)}}>remove</button></li>
                })
            }
        
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input value={this.state.name} id="name" name="name" onChange={this.handleChange}/>
            <input type="submit" value="Add Category"/>
        </form>
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        notes : state.notes,
        category:state.categories
    }
}
export default connect(mapStateToProps)(Category)
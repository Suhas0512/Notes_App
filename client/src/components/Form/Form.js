import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title : this.props.note?this.props.note.title:'',
            body : this.props.note?this.props.note.body:'',
            category : this.props.note?this.props.note.category.name:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : this.state.title,
            body : this.state.body,
            category : this.state.category
        }
        this.props.handleSubmit(formData)
    }
    render(){
        console.log(this.props.note)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input value={this.state.title} id="title" name="title" onChange={this.handleChange}></input><br/>

                    <label htmlFor="body">Body</label>
                    <textarea rows="10" cols="25" value={this.state.body} id="body" name="body" onChange={this.handleChange}></textarea><br/>
                    
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" onChange={this.handleChange}>
                    <option key="key_1" value="" hidden>select</option>
                        {
                           this.props.category && this.props.category.map(category=>{
                            return <option value={category._id} key={category._id}>{category.name}</option>
                            })
                        }
                    </select>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        note : state.notes.find(note=>note._id==id),
        category:state.categories
    }
}
export default withRouter (connect(mapStateToProps)(Form))
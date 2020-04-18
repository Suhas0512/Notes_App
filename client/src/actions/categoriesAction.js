import axios from 'axios'

export const getCategory = (category) => {
    return {type : 'GET_CATEGORY' , payload : category}
}

export const startGetCategory = () => {
    return(dispatch)=>{
        axios.get('http://localhost:3040/categories',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((res)=>{
                dispatch(getCategory(res.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addCategory = (category) => {
    return {type : 'ADD_CATEGORY',payload:category}
}

export const startAddCategory = (formData) => {
    return(dispatch)=>{
        axios.post('http://localhost:3040/categories',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((res)=>{
                alert('category added successfully')
                dispatch(addCategory(res.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const removeCategory = (category) => {
    return {type : 'REMOVE_CATEGORY',payload:category}
}


export const startRemoveCategory = (id) => {
    return(dispatch)=>{
        axios.delete(`http://localhost:3040/categories/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then((res)=>{
                dispatch(removeCategory(res.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
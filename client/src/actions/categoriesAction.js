import axios from 'axios'

export const getCategories=(categories)=>{
    return {
        type:"GET_CATEGORIES",
        payload:categories
    }
}
export const startGetCategories=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3040/categories')
        .then(response=>{
            const categories= response.data
            dispatch(getCategories(categories))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const editCategory=(category)=>{
    return{
        type:"EDIT_CATEGORY",
        payload:category
    }
}
export const startEditCategory=(id, formData)=>{
    return dispatch=>{
        axios.put(`http://localhost:3040/categories/${id}`, formData)
        .then(response=>{
            console.log(response.data)
            if (response.data.hasOwnProperty("message")) {
                console.log(response.data)
              } else {
                const category = response.data;
                dispatch(editCategory(category))
        }
    })
}
}

export const addCategory=(category)=>{
return {
    type:"ADD_CATEGORY",
    payload:category
}
}

export const startAddCategory=(formData)=>{
return (dispatch)=>{
    axios.post('http://localhost:3040/categories', formData)
    .then(response=>{
        const category= response.data
          dispatch(addCategory(category))
    })
    .catch(err=>{
        console.log(err)
    })
}
}

export const deleteCategory=(category)=>{
    return{
        type:"REMOVE_CATEGORY",
        payload:category
    }
}
export const startDeleteCategory=(id)=>{
    return dispatch=>{
        axios.delete(`http://localhost:3040/categories/${id}`)
        .then(response=>{
            const category= response.data
            dispatch(deleteCategory(category))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
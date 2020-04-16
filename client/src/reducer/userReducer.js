const userInintial={}

const userReducer=(state=userInintial,action)=>{
    switch(action.type){
        case 'ADD_USER':{
            return{...action.payload}
        }
        default:{
            return {...state}
        }
    }
}
export default userReducer
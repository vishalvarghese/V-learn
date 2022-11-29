import { createSlice } from '@reduxjs/toolkit'
const defaultUser = JSON.parse(localStorage.getItem('user'))



if(defaultUser){
    var { _id,name, email, profilePicture,status,coverPicture,connections,connection_Request} = defaultUser
}else{

}
// _id,name, email, profilePicture,status,coverPicture,connections

const userSlice = createSlice({
    name:'user',
    initialState:{
        _id,
        name,
        email,
        status,
        profilePicture,
        coverPicture,
        connections,
        connection_Request,
        
    },
    reducers:{
        login:(state,action)=>{
            state._id = action.payload._id
            state.name = action.payload.name
            state.email = action.payload.email
            state.profilePicture = action.payload.profilePicture
            state.coverPicture = action.payload.coverPicture
            state.connections = action.payload.connections
            state.status = action.payload.status
            state.connection_Request = action.payload.connection_Request
        }, 
        logout:(state) => {state ={} }
    },
});


export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    success: false,
    done: false,
    error:'',
}

export const registerSlice= createSlice({
    name: 'register',
    initialState,
    reducers:{
        regSuccess(state){
            state.success= true
            state.error=false
        },
        regFailed(state){
            state.success= false
            state.error=true
        },
        setStatus(state){
            state.done= true
        }
    }
})

export const registerUser= (userData) => async(dispatch) => {
    try{
        const response = await fetch('http://127.0.0.1:8000/register/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
                       },
             body: JSON.stringify(userData),
    });
        if(response.ok){
            console.log('user registered successfully')
            dispatch(regSuccess())
        }
        else{
            console.log("failed to register!!")
            dispatch(regFailed())
        }
    } catch(error){
        console.log(error)
    }
}

export const {regFailed, regSuccess, setStatus} = registerSlice.actions

export const RegisterReducer= registerSlice.reducer
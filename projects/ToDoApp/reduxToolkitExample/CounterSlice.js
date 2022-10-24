import React from "react";
import { createSlice } from "@reduxjs/toolkit";

/*
// createSlice, which takes care of the work of generating action type strings, action creator functions, and action objects
// createSlice automatically generates action creators with the same names as the reducer functions we wrote. We can check that by calling one of them and seeing what it returns:
// It also generates the slice reducer function that knows how to respond to all these action types:
// const newState = counterSlice.reducer(
// { value: 10 },
// counterSlice.actions.increment()
// )
// console.log(newState)
// {value: 11}
*/
export const counterSlice = createSlice({
    name:'todoCounter',
    initialState:{
        value : 0
    },
    reducers:{
        increment : state=> {
            state.value += 1
        },
        decrement : state =>{
            state.value -= -1
        },
        incrementByAmount: (state, action) =>{
            state.value += action.payload
        }
    }
})
export const selectCount = (state) => state.todoCounter.value   ;
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
import React from "react";
import {createSlice} from "@reduxjs/toolkit";

export const todoItemSlice= createSlice({
    name: 'todoItems',
    initialState:{ value: [] },
    reducers:{
        save: (state, action) => {
            state.value = [...state.value, action.payload];
        }
    }
})
export const selectTodo = (state) => state.todoItems.value;
export const {save} = todoItemSlice.actions;
export default todoItemSlice.reducer;

/*

export const selectCount = (state) => state.todoCounter.value   ;
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;

*/
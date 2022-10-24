import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';
import todoItemsReducer from './todoItemSlice';
export default configureStore({
    reducer: {
        todoCounter : counterReducer,
        todoItems : todoItemsReducer
    }
})
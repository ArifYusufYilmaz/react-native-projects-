import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';
export default configureStore({
    reducer: {
        todoCounter : counterReducer
    }
})
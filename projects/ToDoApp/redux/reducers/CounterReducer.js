import React from "react";
import actionTypes from "../actions/ActionTypes";
const counter=(state=0, action)=>{
    let newState;
    switch (action.type){
        case actionTypes.INCREASE_TODO_COUNTER:
            return(newState = state + action.payload)
        default: 
            return state;
    }
};
export default counter;
import React from "react";
import actionTypes from "./ActionTypes";

export const increaseTodoCounter=()=>({
    type:actionTypes.INCREASE_TODO_COUNTER,
    payload: 1
})
import React from "react";
import {ConfigureStore} from "@reduxjs/toolkit";

import reducers from "./Index";

export default function configureStore(){
   return ConfigureStore(reducers) 
}
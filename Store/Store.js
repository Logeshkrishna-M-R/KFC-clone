 import CartSlice from "./CartSlice/CartSlice";
 import { configureStore } from "@reduxjs/toolkit";

 export const store=configureStore({
    reducer : {
        cart :CartSlice
    },
 })
 
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/CounterSlice";


export default configureStore({
    reducer : {
        counter : counterSlice
    }
})
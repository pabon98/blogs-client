import { configureStore } from "@reduxjs/toolkit";
import SiteReducer from "./Reducer/Reducer";

export const store = configureStore({
    reducer: {
        SiteReducer
    }
})
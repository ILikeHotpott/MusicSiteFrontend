'use client';

import {configureStore} from '@reduxjs/toolkit';
import userReducer from "@/store/modules/user";
import charReducer from "@/store/modules/chart";


const store = configureStore({
    reducer: {
        user: userReducer,
        chart: charReducer
    }
})

export default store;
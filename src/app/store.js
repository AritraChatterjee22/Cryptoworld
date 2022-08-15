import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryproApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
})
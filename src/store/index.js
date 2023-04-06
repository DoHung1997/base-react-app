import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleWare = getDefaultMiddleware({
    serializableCheck: false,
});

const rootReducer = {};

const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleWare,
});

export default store;

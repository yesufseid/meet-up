import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dataReducer from "./dataSlice";
import dataSaga from "./dataSaga";




const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    activity:dataReducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(dataSaga);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

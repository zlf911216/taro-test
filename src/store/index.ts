import { configureStore } from "@reduxjs/toolkit";
/* 持久化缓存 */
import { persistStore, persistReducer } from "redux-persist";
import wxStorage from "./storageHack";
import { reducers } from "./slice";
// 缓存数据配置
const persistConfig = {
  key: "yfz",
  storage: wxStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  devTools: false,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

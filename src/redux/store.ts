// import { configureStore } from "@reduxjs/toolkit";
// import { baseApi } from "./api/baseApi/baseApi";

import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi/baseApi";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../redux/api/features/userSlice";
import loginReducer from "../redux/api/features/loginSlice";
import registerReducer from "../redux/api/features/RegisterSlice";
import productReducer from "../redux/api/features/ProductSlice";

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

const persistUserConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    login: loginReducer,
    register: registerReducer,
    user: persistedUserReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>; // Infers the state structure
export type AppDispatch = typeof store.dispatch; // Type for dispatch
export type AppStore = typeof store; // Type for the store

// Persistor to manage rehydration of state
export const persistor = persistStore(store);

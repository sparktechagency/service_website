import { configureStore } from '@reduxjs/toolkit'
import jobSliceReducer from '../features/job/jobSlice'
import authSliceReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/apiSlice'


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    job: jobSliceReducer,
    auth: authSliceReducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
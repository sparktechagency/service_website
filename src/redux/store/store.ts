import { configureStore } from '@reduxjs/toolkit'
import jobSliceReducer from '../features/job/jobSlice'
import authSliceReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/apiSlice'
import categorySliceReducer from '../features/category/categorySlice'
import userSliceReducer from '../features/user/userSllice'
import candidateSliceReducer from '../features/candidate/candidateSlice'
import employerSliceReducer from '../features/employer/employerSlice'
import contactSliceReducer from '../features/contact/contactSlice'


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    job: jobSliceReducer,
    auth: authSliceReducer,
    user: userSliceReducer,
    category: categorySliceReducer,
    candidate: candidateSliceReducer,
    employer: employerSliceReducer,
    contact: contactSliceReducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
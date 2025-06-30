/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBlog } from '@/types/blog.type'
import { createSlice } from '@reduxjs/toolkit'

type TState = {
  blog: TBlog | null
}

 const initialState: TState = {
   blog: null
 }


const blogSlice = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {
    SetBlog: (state, action) => {
      state.blog=action.payload
    },
  }
})

export const { SetBlog } = blogSlice.actions

const blogSliceReducer = blogSlice.reducer;
export default blogSliceReducer;
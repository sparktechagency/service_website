import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryOptions: [
    {
      label: "Plumbing",
      value: "plumbing"
    },
    {
      label: "Carpentar",
      value: "carpentar"
    }
  ],
}

export const categorySlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    SetCategoryOptions: (state, action) => {
      state.categoryOptions=action.payload;
    }
  },
})

export const { SetCategoryOptions } = categorySlice.actions

const categorySliceReducer = categorySlice.reducer;
export default categorySliceReducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ContactError: ""
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    SetContactError: (state, action) => {
      state.ContactError = action.payload;
    },
  },
});



export const { SetContactError } = contactSlice.actions;

const contactSliceReducer = contactSlice.reducer;
export default contactSliceReducer;
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from '@reduxjs/toolkit';



 const initialState = {
   deleteModalOpen: [],
 }


const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    SetDeleteNotificationModalOpen: (state, action) => {
      state.deleteModalOpen=action.payload
    },
  }
})

export const { SetDeleteNotificationModalOpen } = notificationSlice.actions

const notificationSliceReducer = notificationSlice.reducer;
export default notificationSliceReducer;
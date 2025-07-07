/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from '@reduxjs/toolkit';

type TState = {
  conversationList: any[],
  messageList: any[]
}

 const initialState: TState = {
   conversationList: [],
   messageList: []
 }


const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    SetConversationList: (state, action) => {
      state.conversationList=action.payload
    },
    SetMessageList: (state, action) => {
      state.messageList=action.payload
    },
  }
})

export const { SetConversationList, SetMessageList } = chatSlice.actions

const chatSliceReducer = chatSlice.reducer;
export default chatSliceReducer;
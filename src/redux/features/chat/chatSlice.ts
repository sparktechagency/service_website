/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from '@reduxjs/toolkit';

type TState = {
  conversationList: any[],
  messageList: any[],
  receiverId: string
}

 const initialState: TState = {
   conversationList: [],
   messageList: [],
   receiverId: ""
 }


const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    SetConversationList: (state, action) => {
      state.conversationList=action.payload
    },
    SetMessageList: (state, action) => {
      //console.log("Messages from slice------------------",action.payload)
      state.messageList=action.payload
    },
     SetReceiverId: (state, action) => {
      state.receiverId=action.payload
    },
  }
})

export const { SetConversationList, SetMessageList, SetReceiverId } = chatSlice.actions

const chatSliceReducer = chatSlice.reducer;
export default chatSliceReducer;
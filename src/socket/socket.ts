/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetMessageList } from '@/redux/features/chat/chatSlice';
import { store } from '@/redux/store/store';
import { io } from 'socket.io-client';


 
const socket = io("http://10.0.60.118:5004", {
  query: { id: "685407cc450a47934022a9d7" },
  transports: ["websocket"],
  autoConnect: true,
  withCredentials: true,
});

 
// 1. CONNECT
socket.on("connection", () => {
  console.log("🔌 Connected to socket server", socket.id);
});
 
// 2. NEW MESSAGE RECEIVED
socket.on("new-message", (message) => {
  //console.log("📩 New message received:", message);
});
 
// 3. GET ALL MESSAGES (RESPONSE)
socket.on("all-message", (messages) => {
  //console.log("📜 All messages received:", messages);
  store.dispatch(SetMessageList(messages?.messages))
});
 
// 4. CONVERSION LIST
socket.on("conversion-list", (conversations) => {
  console.log("💬 Conversation list:", conversations);
});

export default socket;







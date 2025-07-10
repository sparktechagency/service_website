/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Send, ArrowLeft } from "lucide-react"
import { useMobile } from "@/hooks/useMobile";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SetConversationList, SetMessageList } from "@/redux/features/chat/chatSlice";
import ConversationItem from "./ConversationItem";
import { useSearchParams } from "next/navigation";
import MessageListItem from "./MessageListItem";
import { SuccessToast } from "@/helper/ValidationHelper";
import socket from "@/socket/socket";



const EmployerMessage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);   
  const searchParams = useSearchParams();
  const participantId = searchParams.get("participantId");
  const { conversationList, messageList } = useAppSelector((state)=> state.chat)
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState("Swathi")
  const [showChatList, setShowChatList] = useState(true)
  const isMobile = useMobile()
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Swathi",
      avatar: "/placeholder.svg?height=50&width=50",
      phone: "+11 258 963 21",
      online: true,
      messages: [
        { text: "Hey There !", time: "Today, 2:01pm", sent: false },
        { text: "How are you doing?", time: "Today, 2:02pm", sent: false },
        { text: "Hello...", time: "Today, 2:10pm", sent: true },
        { text: "I am good and how about you?", time: "Today, 2:15pm", sent: true },
        { text: "I am doing well. Can we meet up tomorrow?", time: "Today, 2:19pm", sent: false },
        { text: "Sure!", time: "Today, 2:14pm", sent: true },
      ],
      lastMessage: "Sure!",
      time: "just now",
      unread: false,
    },
  ])
  const currentAuthId = user?.authId?._id;
//   const socket = io("http://10.0.60.118:5004", {
//   query: { id: currentAuthId },
//   transports: ["websocket"],
//     autoConnect: true,
//   withCredentials: true,
// });
 
// // 1. CONNECT
// socket.on("connection", () => {
//   console.log("🔌 Connected to socket server", socket.id);
// });
 
// // 2. NEW MESSAGE RECEIVED
// socket.on("new-message", (message) => {
//   //console.log("📩 New message received:", message);
// });
 
// // 3. GET ALL MESSAGES (RESPONSE)
// socket.on("all-message", (messages) => {
//   //console.log("📜 All messages received:", messages);
//   dispatch(SetMessageList(messages?.messages))
// });
 
// // 4. CONVERSION LIST
// socket.on("conversion-list", (conversations) => {
//   console.log("💬 Conversation list:", conversations);
// });




  const messageEndRef = useRef<HTMLDivElement>(null)
  const chatListRef = useRef<HTMLDivElement>(null)

 

const receiverId = "685407cc450a47934022a9d7";

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    socket.emit(
      "new-message",
      { receiverId: receiverId, text: message },
    );
    socket.emit("all-message", {
      receiverId: participantId,
      page: 1,
    });
    setMessage("")
  };


  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }




  // Go back to chat list on mobile
  const handleBackToList = () => {
    setShowChatList(true)
  }

  const activeUser = chats.find((chat) => chat.name === activeChat);



  const emitAllMessages = (participantId: string) => {
    socket.emit("all-message", {
      receiverId:participantId,
      page: 1,
    });
  };

//send All Chat List
const emitAllChats = () => {
  socket.emit("conversion-list");
};



 useEffect(() => {
   //if (!receiverId) return;

   if (socket.connected) {
     //console.log("Connected------------------------------------------------");
     //emitAllMessages(participantId as string);
     emitAllChats();
   }
 }, []);



  useEffect(() => {
   if (!participantId) return;
   if (socket.connected) {
     //console.log("Connected------------------------------------------------");
     emitAllMessages(participantId as string);
     //emitAllChats();
   }
 }, [participantId]);


 socket.on(`all-message/${participantId}`, (messages) => {
  //console.log(messages);
   dispatch(SetMessageList(messages?.messages))
  // console.log("📜 All messages received fdgfer:------->", messages);
 });





  return (
    <>
      <div className="flex-1 py-4 flex">
        {/* Chat List */}
        <div
          className={`${
            isMobile
              ? showChatList
                ? "w-full"
                : "hidden"
              : "w-full md:w-1/4 lg:w-1/4"
          } border-r border-gray-200 bg-white h-full flex flex-col`}
        >
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Message</h2>
          </div>
          <div
            ref={chatListRef}
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 130px)" }}
          >
            {conversationList?.map((chat, index) => (
              <ConversationItem chat={chat} key={index} />
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div
          className={`${
            isMobile ? (showChatList ? "hidden" : "w-full") : "flex-1"
          } flex flex-col bg-white h-full`}
        >
          Hello
        </div>
      </div>
      {/* <ChatBox/> */}
    </>
  );
}

export default EmployerMessage

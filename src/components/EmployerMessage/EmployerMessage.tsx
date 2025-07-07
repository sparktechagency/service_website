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
import socket from "@/socket/socket";
import { SuccessToast } from "@/helper/ValidationHelper";



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


 socket.on("conversion-list", (conversations) => {
   dispatch(SetConversationList(conversations))
   //console.log("💬 Conversation list:", conversations);
 });




  return (
    <>
      <div className="w-full flex overflow-hidden py-4">
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
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search"
              />
            </div>
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
          {activeUser ? (
            <>
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  {isMobile && (
                    <button
                      onClick={handleBackToList}
                      className="mr-2 p-1 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
                      aria-label="Go back to chat list"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div className="relative">
                    <Image
                      src="/images/user.jpg"
                      alt="go"
                      className="w-12 h-12 rounded-full object-cover"
                      width={500}
                      height={500}
                    />
                    {activeUser.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">{activeUser.name}</h3>
                    {activeUser.phone && (
                      <p className="text-sm text-gray-500">
                        {activeUser.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex-1 p-4 overflow-y-auto bg-gray-50"
                style={{ maxHeight: "calc(100vh - 140px)" }}
              >
                {messageList?.map((msg, index) => (
                  <MessageListItem msg={msg} key={index} />
                ))}
                <div ref={messageEndRef} />
              </div>

              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 py-2 px-4 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Type a message..."
                  />
                  <button
                    onClick={()=> {
                      SuccessToast("Success");
                    }}
                    className="ml-2 p-2 text-white cursor-pointer bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
      {/* <ChatBox/> */}
    </>
  );
}

export default EmployerMessage

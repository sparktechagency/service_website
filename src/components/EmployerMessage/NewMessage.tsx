"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Send, MoreVertical } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"
import socket from "@/socket/socket"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks"
import { SetConversationList, SetMessageList } from "@/redux/features/chat/chatSlice"
import ConversationItem from "./ConversationItem"
import MessageListItem from "./MessageListItem"




export default function NewMessage() {
    const [messageText, setMessageText] = useState("");
    const dispatch = useAppDispatch();
    const { conversationList, messageList} = useAppSelector((state) => state.chat);
    const searchParams = useSearchParams();
    const participantId = searchParams.get("participantId");
    const path = usePathname();


    //chatting part
    //send All Chat List
    const emitAllChats = () => {
        socket.emit("conversion-list");
        console.log("emit----chat-list")
    };

    useEffect(() => {
        //if (socket.connected) {
            emitAllChats();
    //     //}
    }, [path, socket]);

    socket.on("conversion-list", (conversations) => {
        dispatch(SetConversationList(conversations))
        console.log("💬 Conversation list:", conversations);
    });

    
    //chatting part end


    //messaging part
    const emitAllMessages = (participantId: string) => {
        socket.emit("all-message", {
            receiverId: participantId,
            page: 1,
        });
    };

    useEffect(() => {
        if (!participantId) return;
        if (socket.connected) {
            //console.log("Connected------------------------------------------------");
            emitAllMessages(participantId as string);
        }
    }, [participantId]);


    socket.on(`all-message/${participantId}`, (messages) => {
        dispatch(SetMessageList(messages?.messages))
        console.log("📜 All messages received fdgfer:------->", messages?.messages);
    });
    //messaging part ended

    // 2. NEW MESSAGE RECEIVED
    socket.on("new-message", (message) => {
        console.log("📩 New message received:", message);
        console.log(message.message)
        if(message.senderId === participantId){
            dispatch(SetMessageList([...messageList, message]))
        }
    });





    const handleSendMessage = () => {
        if (messageText.trim()) {
            // Here you would typically send the message to your backend
            console.log("Sending message:", messageText)
            socket.emit(
                "new-message",
                { receiverId: participantId, text: messageText.trim() },
            );
            // socket.emit("all-message", {
            //     receiverId: participantId,
            //     page: 1,
            // });
            setMessageText("")
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }


    return (
        <>
            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:ml-0">
                {/* Mobile header */}
                <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
                    {/* <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
                    <h1 className="text-lg font-semibold">Messages</h1>
                    <div className="w-10" />
                </div>

                <div className="flex-1 flex">
                    {/* Chat List */}
                    <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>

                            {/* <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search conversations..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div> */}
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {conversationList?.map((chat, index) => (
                               <ConversationItem key={index} chat={chat}/>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="hidden md:flex flex-1 flex-col">
                        {participantId ? (
                            <>
                                {/* Chat Header */}
                                <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="relative">
                                            {/* <img
                        src={selectedChatData.avatar || "/placeholder.svg"}
                        alt={selectedChatData.name}
                        className="w-10 h-10 rounded-full object-cover"
                      /> */}
                                            {/* {selectedChatData.online && (
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                            )} */}
                                        </div>
                                        <div className="ml-3">
                                            {/* <h3 className="text-lg font-medium text-gray-900">{selectedChatData.name}</h3> */}
                                            {/* <p className="text-sm text-gray-500">
                                                {selectedChatData.online ? "Online" : "Last seen 2 hours ago"}
                                            </p> */}
                                        </div>
                                    </div>

                                    {/* <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div> */}
                                </div>

                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                    {messageList?.map((msg, index) => (
                                        <MessageListItem msg={msg} key={index} />
                                    ))}
                                </div>

                                {/* Message Input */}
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <div className="flex items-end space-x-2">
                                        {/* <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                                            <Paperclip className="w-5 h-5" />
                                        </button> */}

                                        <div className="flex-1 relative">
                                            <textarea
                                                value={messageText}
                                                onChange={(e) => setMessageText(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                placeholder="Type your message..."
                                                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-h-32"
                                                rows={1}
                                            />
                                            {/* <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                                                <Smile className="w-5 h-5" />
                                            </button> */}
                                        </div>

                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!messageText.trim()}
                                            className={`p-2 rounded-full transition-colors ${messageText.trim()
                                                    ? "bg-blue-500 text-white hover:bg-blue-600"
                                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                }`}
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex items-center justify-center bg-gray-50">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">💬</span>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                                    <p className="text-gray-500">Choose a conversation from the sidebar to start messaging</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

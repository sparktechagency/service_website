/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Send } from "lucide-react"
import { useParams, usePathname, } from "next/navigation"
import socket from "@/socket/socket"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks"
import { SetConversationList, SetMessageList } from "@/redux/features/chat/chatSlice"
import MessageListItem from "./MessageListItem"
import ChatItem from "./ChatItem"




export default function MessageBox () {
    const [messageText, setMessageText] = useState("");
    const { receiverId, conversationId} = useParams<{ receiverId: string, conversationId: string }>();
    const dispatch = useAppDispatch();
    const { conversationList, messageList } = useAppSelector((state) => state.chat);
    const path = usePathname();
    const messageEndRef = useRef<HTMLDivElement>(null);



    //chatting part
    //send All Chat List
    const emitAllChats = () => {
        socket.emit("conversion-list");
    };

    useEffect(() => {
        emitAllChats();
    }, [path, socket]);

    socket.on("conversion-list", (conversations) => {
        dispatch(SetConversationList(conversations))
        //console.log("💬 Conversation list:", conversations);
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
        if (!receiverId) return;
        //if (socket.connected) {
            //console.log("Connected------------------------------------------------");
            emitAllMessages(receiverId as string);
        //}
    }, [receiverId]);


    socket.on(`all-message/${receiverId}`, (messages) => {
        //dispatch(SetMessageList(messages?.messages))
        //console.log("📜 All messages received fdgfer:------->", messages?.messages);
    });
    //messaging part ended

    // 2. NEW MESSAGE RECEIVED
    useEffect(()=> {
            socket.on("new-message", (message) => {
        //console.log("📩 New message received:", message);
        //console.log("outside-----",message)
        //console.log(message)
        
        if ((message.conversationId === conversationId)) {
            console.log(message.conversationId === conversationId)
             console.log("new-message", {
                conv: message.conversationId,
                chatId: conversationId
            })
            //console.log("inside-----",message)
            dispatch(SetMessageList([...messageList, message]));
            setTimeout(scrollToBottom, 100);
        }

    });

    }, [conversationId])


    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    useEffect(() => {
        scrollToBottom();
    }, [messageList]);


    const handleSendMessage = () => {
        if (messageText.trim()) {
            // Here you would typically send the message to your backend
            console.log("Sending message:", messageText)
            socket.emit(
                "new-message",
                { receiverId: receiverId, text: messageText.trim() },
            );
            // socket.emit("all-message", {
            //     receiverId: participantId,
            //     page: 1,
            // });
            setMessageText("");
            setTimeout(scrollToBottom, 100);
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
            <div className="flex-1 flex min-h-[calc(100vh-88px)]"> {/* adjust based on navbar height */}
                {/* Chat List */}
                <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">Message Box</h2>
                        </div>
                    </div>

                    {/* Scrollable Chat List */}
                    <div className="flex-1 overflow-y-auto">
                        {conversationList?.map((chat, index) => (
                          <ChatItem key={index} chat={chat} />                       
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="hidden md:flex flex-1  w-full flex-col bg-gray-50">
                    {receiverId ? (
                        <>
                            {/* Chat Header */}
                            <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
                                <div className="flex items-center">
                                    {/* <Image
                                        src={imgSrc}
                                        alt="image"
                                        className="w-10 h-10 rounded-full object-cover"
                                        width={600}
                                        height={600}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "/images/profile_placeholder.png";
                                        }}
                                    /> */}
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-900">{"name"}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messageList?.map((msg, index) => (
                                    <MessageListItem msg={msg} key={index} />
                                ))}
                                <div ref={messageEndRef} />
                            </div>

                            {/* Fixed Input */}
                            <div className="p-4 bg-white border-t border-gray-200">
                                <div className="flex items-end space-x-2">
                                    <div className="flex-1 relative">
                                        <textarea
                                            value={messageText}
                                            onChange={(e) => setMessageText(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Type your message..."
                                            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-h-32"
                                            rows={1}
                                        />
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

        </>
    )
}

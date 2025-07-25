/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Send } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"
import socket from "@/socket/socket"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks"
import { SetConversationList, SetMessageList } from "@/redux/features/chat/chatSlice"
import ConversationItem from "./ConversationItem"
import MessageListItem from "./MessageListItem"




export default function NewMessage() {
    const [messageText, setMessageText] = useState("");
    const dispatch = useAppDispatch();
    const { conversationList, messageList } = useAppSelector((state) => state.chat);
    const searchParams = useSearchParams();
    const participantId = searchParams.get("participantId");
    const name = searchParams.get("name");
    //const image = searchParams.get("image");
    const path = usePathname();
    //const imgSrc = image === "null" ? "/images/profile_placeholder.png" : baseUrl + image;
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
        if (!participantId) return;
        //if (socket.connected) {
            //console.log("Connected------------------------------------------------");
            emitAllMessages(participantId as string);
        //}
    }, [participantId]);


    socket.on(`all-message/${participantId}`, (messages) => {
        dispatch(SetMessageList(messages?.messages))
        console.log("📜 All messages received fdgfer:------->", messages?.messages);
    });
    //messaging part ended

    // 2. NEW MESSAGE RECEIVED
    // socket.on("new-message", (message) => {
    //     //console.log("📩 New message received:", message);
    //     //console.log("outside-----",message)
    //     if ((message.conversationId === conversationId)) {
    //         //console.log("inside-----",message)
    //         dispatch(SetMessageList([...messageList, message]));
    //         setTimeout(scrollToBottom, 100);
    //         console.log("new-message", {
    //             conv: message.conversationId,
    //             chatId: conversationId
    //         })
    //     }

    // });



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
                { receiverId: participantId, text: messageText.trim() },
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
                            <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
                        </div>
                    </div>

                    {/* Scrollable Chat List */}
                    <div className="flex-1 overflow-y-auto">
                        {conversationList?.map((chat, index) => (
                          <ConversationItem key={index} chat={chat}/>                       
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="hidden md:flex flex-1  w-full flex-col bg-gray-50">
                    {participantId ? (
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
                                        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
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

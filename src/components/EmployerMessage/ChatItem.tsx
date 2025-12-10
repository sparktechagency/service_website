/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useUserInfo from "@/hooks/useUserInfo";
import { TParticipant } from "@/types/participant.type";
import getPartner from "@/utils/getPartner";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";


type TConversation = {
  chat: any,
}

const ChatItem = ({ chat }: TConversation) => {
  const currentAuthId = localStorage.getItem("authId")
  const partner = getPartner(chat?.participants, currentAuthId as string) as TParticipant;
  const { receiverId} = useParams<{ receiverId: string, conversationId: string }>();
  const userInfo = useUserInfo();
  const router = useRouter();
  //const imgSrc = partner?.profile_image ? baseUrl + partner?.profile_image : "/images/profile_placeholder.png";
  const imgSrc = "/images/profile_placeholder.png";



  const handleSelect = (participantId: string,) => {
    router.push(`/dashboard/${userInfo?.role === "USER" ? "candidate" : "employer"}/messages/${participantId}/${chat?._id}`)
  }

  return (
    <>
      <div
        className={`flex items-center p-4 cursor-pointer transition-colors hover:bg-gray-50 ${receiverId === partner?._id ? "bg-blue-50 border-r-2 border-blue-500" : ""
          }`}
        onClick={() => handleSelect(partner?._id)}
      // className={`flex items-center p-4 cursor-pointer transition-colors hover:bg-gray-50`}
      >
        <div className="relative">
          {/* <img
                      src={chat.avatar || "/placeholder.svg"}
                      alt={chat.name}
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
          <Image
            src={imgSrc}
            alt="go"
            className="w-12 h-12 rounded-full object-cover"
            width={500}
            height={500}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/profile_placeholder.png";
            }}
          />
          {/* {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )} */}
        </div>

        <div className="ml-3 flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900 truncate">{partner?.name}</p>
            {/* <p className="text-xs text-gray-500">{chat.timestamp}</p> */}
          </div>
          {/* <p className="text-sm text-gray-500 truncate mt-1">{"lastMessage"}</p> */}
        </div>

        {/* {chat.unread && (
                    <div className="ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )} */}
      </div>
    </>
  );
};

export default ChatItem;

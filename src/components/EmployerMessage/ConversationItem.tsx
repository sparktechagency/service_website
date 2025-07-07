/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SuccessToast } from "@/helper/ValidationHelper";
import useUserInfo from "@/hooks/useUserInfo";
import getPartner from "@/utils/getPartner";
import Image from "next/image";
import { useRouter } from "next/navigation";


type TConversation = {
    chat: any
}

const ConversationItem = ({ chat }: TConversation) => {
  const partner = getPartner(chat?.participants, "685407cc450a47934022a9d7");
  const userInfo = useUserInfo();
  const router = useRouter();



  const handleSelect = (participantId: string) => {
    SuccessToast("Hello")
    router.push(`/dashboard/${userInfo?.role.toLowerCase()}/messages?participantId=${participantId}`)
  }
  
  return (
    <>
      <div
        className={`flex items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-red-50"bg-gray-100}`}
        onClick={() => handleSelect(partner?._id)}
      >
        <div className="relative flex-shrink-0">
          <Image
            src="/images/user.jpg"
            alt="go"
            className="w-12 h-12 rounded-full object-cover"
            width={500}
            height={500}
          />
          {/* {chat.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )} */}
        </div>
        <div className="ml-4 flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {partner?.name}
            </h3>
            {/* <span className="text-xs text-gray-500">{chat.time}</span> */}
          </div>
          <p className="text-sm text-gray-500 truncate">{"chat.lastMessage"}</p>
        </div>
        {/* {chat.unread && (
          <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></div>
        )} */}
      </div>
    </>
  );
};

export default ConversationItem;

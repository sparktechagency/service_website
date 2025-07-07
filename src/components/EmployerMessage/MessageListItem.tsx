/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks/hooks";


const MessageListItem = (msg:any) => {
  const { user } = useAppSelector((state) => state.user);   
  const currentAuthId = user?.authId?._id;
  

  return (
    <>
      <div
        className={`flex ${
          msg.senderId === currentAuthId ? "justify-end" : "justify-start"
        } mb-4`}
      >
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
            msg.senderId === currentAuthId
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-200 text-gray-800 rounded-bl-none"
          }`}
        >
          <p className="text-sm">{msg.message}</p>
          {/* <p className={`text-xs mt-1 ${msg.sent ? "text-blue-200" : "text-gray-500"}`}>{msg.time}</p> */}
        </div>
      </div>
    </>
  );
};

export default MessageListItem;

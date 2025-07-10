/* eslint-disable @typescript-eslint/no-explicit-any */


const MessageListItem = ({ msg }: any) => {
  
const currentAuthId = localStorage.getItem("authId")


  return (
    <>
  

      <div
        className={`flex ${msg.senderId === currentAuthId ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`flex max-w-xs lg:max-w-md ${msg.senderId === currentAuthId ? "flex-row-reverse" : "flex-row"}`}
        >
          {/* {message.sender === "other" && (
                          <img
                            src={message.avatar || "/placeholder.svg"}
                            alt={message.senderName}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        )} */}
          <div className={`mx-2 ${msg.senderId === currentAuthId ? "mr-0" : "ml-0"}`}>
            <div
              className={`px-4 py-2 rounded-2xl ${msg.senderId === currentAuthId
                ? "bg-blue-500 text-white rounded-br-sm"
                : "bg-white text-gray-900 rounded-bl-sm border border-gray-200"
                }`}
            >
              <p className="text-sm">{msg?.message}</p>
            </div>
            {/* <p
              className={`text-xs text-gray-500 mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}
            >
              {message.timestamp}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageListItem;

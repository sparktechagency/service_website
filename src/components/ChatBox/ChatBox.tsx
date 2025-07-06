"use client";

import { useSocket } from "@/hooks/useSocket";
import { useEffect } from "react";



const ChatBox = () => {
  const receiverId = "6825e844e3d9499decc80fdb";
  const { socket, isConnected, emitInitialMessage, emit, on, off } = useSocket({
    serverUrl: "http://10.0.60.118:5004",
    userId: "685407cc450a47934022a9d7",
  });

  

  useEffect(() => {
    if (isConnected && receiverId) {
      // Emit initial message request when connected
      emitInitialMessage(receiverId, 1);
    }
  }, [isConnected, receiverId, emitInitialMessage]);

  return <>This is Chat Box</>;
};

export default ChatBox;
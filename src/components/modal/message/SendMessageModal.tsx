"use client";
import { Modal } from "antd";
import { useState } from "react";
import { MessageCircleMore, SendHorizonal } from "lucide-react";
import socket from "@/socket/socket";
import { useRouter } from "next/navigation";

type TProps = {
    receiverId: string;
};

const SendMessageModal = ({ receiverId }: TProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (inputValue.trim()) {
            socket.emit("new-message", {
                receiverId,
                text: inputValue.trim(),
            });
            setInputValue("");
            setModalOpen(false);
            router.push(`/dashboard/employer/messages?participantId=${receiverId}`);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <div
                onClick={() => setModalOpen(true)}
                className="mt-1 flex items-center cursor-pointer text-blue-600 hover:underline"
            >
                <MessageCircleMore size={18} className="flex-shrink-0" />
                <span className="ml-1 font-medium">Message</span>
            </div>

            <Modal
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                maskClosable={false}
                footer={false}
                centered
            >
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">
                        ✉️ Send a Message
                    </h3>

                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className="flex items-center gap-1 px-4 py-2.5 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            <SendHorizonal size={16} />
                            Send
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default SendMessageModal;

import React, { useEffect, useState } from "react";
import { UserProfile, type ChatMessage } from "../../types";
import { dummyMessages } from "../../assets/dummyMessages";
import { dummyUser } from "../../assets/dummyUser";


const ChatMessagesContainer: React.FC = () => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

    useEffect(() => {
        setChatMessages(dummyMessages);
        setUser(dummyUser);
    }, []);

    useEffect(() => {
        const top = window.innerHeight;
        document.documentElement.scrollTo({ top: top + 1000 })
    }, [chatMessages, user]);

    if (!user) return <></>;

    return (
        <div className="w-full flex flex-col gap-4 mt-[85px] justify-start items-start">
            {chatMessages.map((msg) => (
                <div
                    key={msg.id}
                    className={`max-w-full rounded-lg p-4 ${msg.sender_id === user.id ? "self-end bg-blue-500 text-white" : "bg-gray-800 text-slate-400"}`}
                >
                    {msg.text && <p>{msg.text}</p>}
                </div>
            ))}
        </div>
    )
}

export default ChatMessagesContainer;

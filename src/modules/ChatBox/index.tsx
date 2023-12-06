import React from "react"
import ChatBoxInput from "./ChatBoxInput.tsx"
import ChatHeader from "./ChatHeader.tsx"
import ChatMessagesContainer from "./ChatMessagesContainer.tsx"

const ChatBox: React.FC = () => {
    return (
        <div className="flex flex-col justify-start items-start p-4">
            {/* chat box header */}
            <ChatHeader />
            {/* chat box body */}
            <ChatMessagesContainer />
            {/* chat box input */}
            <ChatBoxInput />
        </div>
    )
}

export default ChatBox

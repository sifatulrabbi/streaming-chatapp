import React, { useState } from "react"
import { FaPlus, FaLink } from "react-icons/fa6"
import EmojiContainer from "./EmojiContainer"

const ChatBoxInput: React.FC = () => {
    const [msg, setMsg] = useState("")

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log()
    }

    return (
        <div className="fixed left-0 right-0 bottom-0 p-4 bg-gray-900">
            <form onSubmit={handleSubmit} className="flex flex-column justify-start items-center w-full bg-gray-800 rounded-lg p-2 gap-4">
                <button type="button" className="bg-gray-600 rounded-full p-1 text-gray-800">
                    <FaPlus />
                </button>
                <input
                    className="bg-transparent border-none outline-none text-slate-300 placeholder:text-slate-500 w-full"
                    value={msg}
                    required placeholder="Enter your message..."
                    onChange={(e) => setMsg(e.currentTarget.value)}
                />

                <div className="min-w-max flex flex-row items-center justify-end gap-2">
                    <EmojiContainer insert={(e: string) => setMsg((p) => p + e)} />
                    <button type="button" className="rounded-full text-slate-300 text-xl flex justify-center items-center"><FaLink /></button>
                </div>
            </form>
        </div>
    )
}

export default ChatBoxInput

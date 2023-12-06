import React from "react";

const dummyUser = {
    id: "fdafahj43jlk4j32fkdjaskfs",
    fullname: "John Doe",
    avatar_url: "https://avatars.githubusercontent.com/u/96096780?s=400&v=4",
    username: "john_doe",
}

const ChatHeader: React.FC = () => {
    return (
        <div className="fixed top-0 w-full flex text-slate-400 border-b border-gray-600 py-4 bg-gray-900">
            <div className="flex flex-row gap-4 items-center">
                <img src={dummyUser.avatar_url} width={40} height={40} className="rounded-full" />
                <div className="flex flex-col justify-start items-start">
                    <h4 className="text-slate-300">{dummyUser.fullname}</h4>
                    <p className="text-slate-500 text-sm">{"@"}{dummyUser.username}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;

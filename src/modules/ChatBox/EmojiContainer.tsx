import React from "react";
import { FaFaceSmile } from "react-icons/fa6";
import { emojiList } from "../../assets/emojiList";

type Props = {
    show: boolean;
    insert: (e: string) => void;
    setShow: (v: boolean) => void;
};

const EmojiContainer: React.FC<Props> = ({ insert, show, setShow }) => {

    return (
        <div className="flex relative">
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="rounded-full text-slate-300 text-xl flex justify-center items-center"
            >
                <FaFaceSmile />
            </button>
            {show && (
                <div className="absolute right-0 min-w-max bottom-full p-4 rounded-lg bg-gray-900 grid grid-cols-5 max-h-[50vh] overflow-y-auto">
                    {emojiList().map((e) => (
                        <button
                            key={e.name}
                            onClick={() => insert(e.content)}
                            className="text-xl min-w-[28px] min-h-[28px]"
                            dangerouslySetInnerHTML={{ __html: e.content }}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EmojiContainer;

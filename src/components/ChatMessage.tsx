import { ChatMessage as ChatMessageType } from "@/@types/chat";
import ChatAvatar from "./ChatAvatar";
import userImg from "@/assets/images/avatar-male.png";

type ChatMessageProps = {
  chat: ChatMessageType;
  positon: "left" | "right";
};

const ChatMessage = ({ chat, positon }: ChatMessageProps) => {
  const alignmentClass = positon === "left" ? "items-start justify-start" : "items-end justify-end";
  return (
    <div className={`flex  ${alignmentClass}   `}>
      <div className="w-fit max-w-[90%]">
        <ChatAvatar
          imgUrl={userImg}
          name={chat.sender}
          timestamp={chat.timestamp}
        />
        <div className={`p-4 mt-2 text-sm  ${positon == "left" ? "bg-gray-100 text-slate-700" : "bg-sky-600 text-white"} rounded-md`}>
          {chat.message}
        </div>
      </div>
    </div>
  );
};



export default ChatMessage;

import { ElementProps } from "@/@types/common";
import ChatUser from "@/components/ChatUser";

type ChatListProps = ElementProps;

const ChatList = ({ ...props }: ChatListProps) => {
  return (
    <section {...props}>
      <ChatUser />  
      <ChatUser />  
      <ChatUser />  
      <ChatUser />  
      <ChatUser />  
      <ChatUser />  
      <ChatUser />  
      <ChatUser />  
      <ChatUser />  
      
    </section>
  );
};

export default ChatList;

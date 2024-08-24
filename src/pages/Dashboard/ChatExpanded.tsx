import { ElementProps } from "@/@types/common";
import ChatMessage from "@/components/ChatMessage";

type ChatListProps = ElementProps;

const ChatExpanded = ({ ...props }: ChatListProps) => {
  return (
    <section {...props}>
      {mockData.map((message) => (
        <ChatMessage
          chat={message}
          positon={message.sender == "UserA" ? "left" : "right"}
          key={message.id}
        />
      ))}
    </section>
  );
};

const mockData = [
  {
    id: 1,
    sender: "UserA",
    timestamp: "2024-08-24T10:00:00Z",
    message: "Hey, how are you?",
  },
  {
    id: 2,
    sender: "UserB",
    timestamp: "2024-08-24T10:01:00Z",
    message: "I'm good, thanks! How about you?",
  },
  {
    id: 3,
    sender: "UserA",
    timestamp: "2024-08-24T10:02:30Z",
    message: "I'm doing well. What are you up to today?, really excited to test this new feature out, because God is good and great things happen to great people recall the great floki",
  },
  {
    id: 4,
    sender: "UserB",
    timestamp: "2024-08-24T10:03:45Z",
    message: "Just working on a project. You?",
  },
  {
    id: 5,
    sender: "UserA",
    timestamp: "2024-08-24T10:05:10Z",
    message: "Same here, just coding away!",
  },
];

export default ChatExpanded;

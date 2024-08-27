import { ElementProps } from "@/@types/common";
import ChatMessage from "@/components/ChatMessage";

type ChatListProps = ElementProps;

const ChatExpanded = ({ ...props }: ChatListProps) => {
  return (
    <section {...props}>
      <div className="flex flex-col flex-grow p-6 space-y-6 overflow-y-auto">
        {mockData.map((message) => (
          <ChatMessage
            chat={message}
            positon={message.sender == "UserA" ? "left" : "right"}
            key={message.id}
          />
        ))}
      </div>

      <div className="flex items-center px-8 py-2 mx-6 my-4 rounded-md bg-slate-200">
        <input
          placeholder="type here ..."
          type="text"
          className="w-full py-1 text-lg bg-transparent outline-none text-slate-800 "
        />{" "}
        <svg
          className="text-gray-800 rotate-90 h-7 w-7 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
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
    message:
      "I'm doing well. What are you up to today?, really excited to test this new feature out, because God is good and great things happen to great people recall the great floki",
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
  {
    id: 6,
    sender: "UserB",
    timestamp: "2024-08-24T10:03:45Z",
    message: "Just working on a project. You?",
  },
  {
    id: 7,
    sender: "UserA",
    timestamp: "2024-08-24T10:05:10Z",
    message: "Same here, just coding away!",
  },
];

export default ChatExpanded;

type ChatAvatarProps = {
  imgUrl: string;
  name: string;
  timestamp: string;
};

const ChatAvatar = ({ imgUrl, name, timestamp }: ChatAvatarProps) => {
  return (
    <div className="flex items-center space-x-2 text-sm w-fit">
      <img
        src={imgUrl}
        alt="user image"
        className="w-[30px] h-[30px] object-contain rounded-full bg-slate-100 p-[2px]"
      />
      <h3 className="font-semibold">{name}</h3>
      <span className="text-[9px] text-gray-600">{ getFormattedTime(timestamp) }</span>
    </div>
  );
};

function getFormattedTime(dateString:string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

export default ChatAvatar;

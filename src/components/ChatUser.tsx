import avatar from "@/assets/images/avatar-male.png"

const ChatUser = () => {
  return (
    <div className="flex items-center px-6 py-2 space-x-2 cursor-pointer hover:bg-white">
        <img src={avatar} alt="user image" className="w-[40px] h-[40px] object-contain rounded-full bg-slate-100 p-[2px]" />
        <div className="">
            <h4 className="text-sm mb-[2px] font-semibold">John Doe</h4>
            <p className="-mt-1 text-xs text-gray-700">John doe last message here</p>
        </div>
    </div>
  )
}

export default ChatUser
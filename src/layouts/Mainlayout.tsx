import { Outlet } from "react-router-dom";
import userImg from "@/assets/images/guyAvatar.png";

const Mainlayout = () => {
  return (
    <main className="h-dvh">
      <header className="flex items-center h-[75px] justify-between  pr-6  border-b pl-7 ">
        <span className="flex items-center font-bold"> <span className="px-1 py-[2px] text-white rounded-sm bg-slate-900 mr-2">BH</span> Book Home</span>
        <input type="text" name="" id="" placeholder="type to search" />
        <div className="flex items-center">
          
          <NotificationsCount />
          <UserAvatar />
        </div>
      </header>
      <section className=" overflow-hidden h-[calc(100dvh-75px)]">
        <Outlet />
      </section>
    </main>
  );
};

const UserAvatar = () => {
  return (
    <div className="flex items-center space-x-1 ">
      <img
        src={userImg}
        alt="user image"
        className="w-[40px] h-[40px] object-contain rounded-full bg-slate-100 p-[2px]"
      />
      <p className="mt-1 text-sm text-gray-700">Johndoe123@gmail.com</p>
    </div>
  );
};

const NotificationsCount = () => {
  return (
    <span className="relative">
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
        />
      </svg>
      <span className="absolute flex items-center justify-center rounded-full w-3 h-3 text-[9px] top-[1px] left-[2px] text-white  bg-slate-900">12</span>
    </span>
  );
};

export default Mainlayout;

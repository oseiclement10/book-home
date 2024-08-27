import ChatExpanded from "./ChatExpanded";
import ReservationsList from "./ReservationsList";
import ChatList from "./ChatList";

const Dashboard = () => {
  return (
    <section className="grid h-full grid-cols-5 gap-6 ">
      <ChatList className="h-full py-8 space-y-3 overflow-y-auto bg-slate-100" />
      <ChatExpanded className="flex flex-col h-full col-span-3 overflow-y-auto border-r " />
      <ReservationsList className="h-full p-3 overflow-y-auto" />
    </section>
  );
};

export default Dashboard;

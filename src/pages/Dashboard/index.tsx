import ChatExpanded from "./ChatExpanded";
import ReservationsList from "./ReservationsList";
import ChatList from "./ChatList";

const Dashboard = () => {
  return (
    <section className="grid h-full grid-cols-5 gap-6 ">
      <ChatList className="h-full px-6 py-8 space-y-6 bg-slate-100" />
      <ChatExpanded className="h-full col-span-3 p-3 space-y-6 border-r" />
      <ReservationsList className="h-full p-3" />
    </section>
  );
};

export default Dashboard;

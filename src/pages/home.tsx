import { Filter, LibraryBig } from "lucide-react";
import { Header } from "../components/header";
import { CardList } from "../components/cardList";
import { Footer } from "../components/footer";
import AddTaskModal from "../components/addTaskModal";

function Home() {
  return (
    <div className="bg-primary flex flex-col gap-6 font-sans">
      <Header />
      <div className="flex flex-row items-center justify-between px-4 md:px-[10%]">
        <h2 className="text-2xl  font-bold tracking-wide text-white">
          Olá, Maick
        </h2>
        <div className="flex flex-row gap-6 ">
          <AddTaskModal />
          <button className="hover:scale-110 ease-in-out duration-300">
            <Filter size={36} color="#ffffff" />
          </button>
          <button className="hidden md:flex hover:scale-110 ease-in-out	duration-300">
            <LibraryBig size={36} color="#ffffff" />
          </button>
        </div>
      </div>
      <hr className="mx-3 border-white/70 mb-8 md:mx-[10%]" />
      <div className="md:px-[5%]">
        <CardList title="Para hoje" autoPlay={true} />
        <CardList title="Esta semana" autoPlay={false} />
        <CardList title="Lembretes" autoPlay={false} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

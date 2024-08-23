import { Filter, LibraryBig, Plus } from "lucide-react";
import Header from "../components/header";
import CardList from "../components/cardList";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="bg-primary flex flex-col gap-6 font-sans">
      <Header />
      <div className="flex flex-row items-center justify-between px-4 md:px-[10%]">
        <h2 className="text-2xl  font-bold tracking-wide text-white">
          Olá, Maick
        </h2>
        <div className="flex flex-row gap-6 ">
          <Plus size={36} color="#ffffff" />
          <Filter size={36} color="#ffffff" />
          <LibraryBig size={36} color="#ffffff" className="hidden md:flex" />
        </div>
      </div>
      <hr className="mx-3 border-white/70 mb-8 md:mx-[10%]" />
      <div className="md:px-[10%]">
        <CardList title="Para hoje" />
        <CardList title="Esta semana" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

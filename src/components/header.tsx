import { CircleUserRound, Settings } from "lucide-react";

export function Header() {
  return (
    <div className="bg-primary text-white flex flex-row justify-between p-6 items-center h-fit shadow font-sans md:px-16">
      <img
        src="public/odyssey-organizer-logo-header.png"
        alt="Logo Odyssey Organizer"
        draggable={false}
        className="h-4 md:h-6"
      />
      <div className="flex items-center justify-center gap-10">
        <button className="hover:scale-110 ease-in-out	 duration-300">
          <CircleUserRound color="#ffffff" size={36} />
        </button>
        <button className="hidden md:flex hover:scale-110 ease-in-out	duration-300">
          <Settings color="#ffffff" size={36} />
        </button>
      </div>
    </div>
  );
}

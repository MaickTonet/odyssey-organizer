import { CircleUserRound } from "lucide-react";

function Header() {
  return (
    <div className="bg-primary text-white flex flex-row justify-between p-6 items-center h-fit shadow font-sans">
      <h1 className="text-lg font-bold tracking-wider">Odyssey Organizer</h1>
      <CircleUserRound color="#ffffff" size={36} />
    </div>
  );
}

export default Header;

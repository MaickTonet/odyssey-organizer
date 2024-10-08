import { CircleCheck, Pencil, Trash2 } from "lucide-react";

function Card() {
  return (
    <div className="bg-secondary text-white p-3 border border-white/50 rounded-lg font-sans flex gap-3 md:p-6 md:gap-6 md:flex-col md:max-w-xs">
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex gap-2">
          <p className="bg-yellow-400/50 w-fit px-2 rounded-xl">Casa</p>
          <p className="bg-blue-400/50 w-fit px-2 rounded-xl">Trabalho</p>
          <p className="bg-purple-400/50 w-fit px-2 rounded-xl">Lazer</p>
        </div>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi
          quam aliquid vero temporibus cupiditate, pariatur nostrum dignissimos
          ipsa voluptatem in expedita? Labore laboriosam fugit culpa saepe
          doloribus atque possimus.
        </p>
      </div>
      <div className="flex gap-2 items-start md:justify-evenly md:items-center">
        <button className="hidden md:flex hover:scale-110  ease-in-out duration-300">
          <Trash2 size={28} color="#ffffff" />
        </button>
        <button className="hover:scale-110 ease-in-out duration-300">
          <Pencil size={28} color="#ffffff" />
        </button>
        <button className="hidden md:flex hover:scale-110 ease-in-out duration-300">
          <CircleCheck size={28} color="#ffffff" className="hidden md:flex" />
        </button>
      </div>
    </div>
  );
}

export default Card;

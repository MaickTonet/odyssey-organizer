import Card from "./card";

interface CardListProps {
  title: string;
}

function CardList(props: CardListProps) {
  const { title } = props;

  return (
    <div className="p-4 flex flex-col gap-6 font-sans">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl  font-bold tracking-wide text-white">
          {title}
        </h2>
        <p className="text-white text-lg">Ver mais</p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CardList;

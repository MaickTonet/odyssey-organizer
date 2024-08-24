import Card from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CardListProps {
  title: string;
  autoPlay: boolean;
}

const responsive = {
  desktop: {
    breakpoint: { max: 1600, min: 768 },
    items: 4,
  },
  largeDesktop: {
    breakpoint: { max: 2500, min: 1601 },
    items: 5,
  },
};

export function CardList(props: CardListProps) {
  const { title, autoPlay } = props;

  return (
    <div className="p-4 flex flex-col gap-6 font-sans">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl  font-bold tracking-wide text-white">
          {title}
        </h2>
        <button className="text-white text-lg hover:scale-110  ease-in-out duration-300">
          Ver mais
        </button>
      </div>
      <div className="hidden flex-col gap-6 md:flex md:flex-row">
        <Carousel
          className="w-screen"
          responsive={responsive}
          draggable={true}
          swipeable={true}
          {...(autoPlay && { infinite: true })}
          {...(autoPlay && { autoPlay: true })}
          {...(autoPlay && { slidesToSlide: 1 })}
          {...(autoPlay && { autoPlaySpeed: 3000 })}
          removeArrowOnDeviceType={["desktop", "largeDesktop"]}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
      <div className="flex flex-col gap-6 md:hidden">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

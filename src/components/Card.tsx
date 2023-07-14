import { FC } from "react";
import { Link } from "react-router-dom";
import { IBeer } from "../types";
import beerImg from "../resources/beer.png";

interface ICard {
  beer: IBeer;
  handleBeerClick: (event: React.MouseEvent<HTMLAnchorElement>, cardId: number) => void;
}
const Card: FC<ICard> = ({ beer, handleBeerClick }) => {
  return (
    <Link className="relative justify-self-center h-[32rem] w-60 flex flex-col items-center border border-zinc-400 py-4 px-12 cursor-pointer  hover:shadow-lg hover:-translate-y-1  duration-300"
      to={`/${beer.id}`}
      onContextMenu={(event) => {
        if(!event.currentTarget.classList.contains("selected")) {
          event.currentTarget.classList.add("selected")
        } 
        else {
          event.currentTarget.classList.remove("selected")
        }
        handleBeerClick(event, beer.id)}}
    >
      <div >
        <div className="w-32 h-[25rem] flex">
          <img
            className="mx-auto object-contain"
            src={
              beer.image_url === "https://images.punkapi.com/v2/keg.png"
                ? beerImg
                : beer.image_url
            }
            alt={beer.name}
          />
        </div>
        <h1 className="mt-4 text-center font-medium text-base">{beer.name}</h1>
        <p
          title={beer.tagline}
          className="absolute bottom-1 left-2 text-cyan-700"
        >
          {beer.tagline.substring(0, 25)}
        </p>
      </div>
    </Link>
  );
};

export default Card;

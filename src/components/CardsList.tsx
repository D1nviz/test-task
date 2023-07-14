import { FC, useEffect, useState } from "react";

import Card from "../components/Card";
import { useBeers } from "../store";
import { BeerStore, IBeer } from "../types";

const CardsList: FC = () => {
  const fetchAllBeers = useBeers((state: BeerStore) => state.fetchAllBeers);
  const [selectedBeers, setSelectedBeers] = useState<number[]>([]);
  const setBeers = useBeers((state: BeerStore) => state.setBeers);
  const beers: IBeer[] = useBeers((state: BeerStore) => state.beers);
  const isLoading = useBeers((state: BeerStore) => state.loading);

  useEffect(() => {
    fetchAllBeers();
  
  }, []);

  useEffect(() => {
    if(beers.length === 0) {
      fetchAllBeers();
    }
  }, [beers]);

  const handleBeerClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    cardId: number
  ) => {
    event.preventDefault();
    if (selectedBeers.includes(cardId)) {
      setSelectedBeers(selectedBeers.filter((id) => id !== cardId));
    } else {
      setSelectedBeers([...selectedBeers, cardId]);
    }
  };

  const handleDeleteselectedBeers = (): void => {
    const updatedCards = beers.filter(
      (beer: IBeer) => !selectedBeers.includes(beer.id)
    );
    setBeers(updatedCards);
    setSelectedBeers([]);
  };

  return (
    <div className="mx-auto my-20 grid grid-cols-5 gap-10">
      <button
        className="flex z-10 rounded absolute right-20 top-24 bg-red-500 text-white p-2"
        onClick={handleDeleteselectedBeers}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          fill="white"
          width="25"
          height="25"
          viewBox="0 0 30 30"
        >
          <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
        </svg>
        Delete selected cards
      </button>
      {isLoading ? (
        <div className="custom-loader"></div>
      ) : (
        beers
          .slice(0, 15)
          .map((beer) => (
            <Card key={beer.id} beer={beer} handleBeerClick={handleBeerClick} />
          ))
      )}
    </div>
  );
};

export default CardsList;

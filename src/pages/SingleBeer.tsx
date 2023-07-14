import { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BeerStore } from "../types";
import { useBeers } from "../store";
import beerImg from "../resources/beer.png";

const SingleBeer: FC = () => {
  const { id }  = useParams();
  const fetchBeer = useBeers((state: any) => state.fetchBeer);
  const isLoading = useBeers((state: BeerStore) => state.loading);

  useEffect(() => {
    fetchBeer(id);
  }, []);
  const beer = useBeers((state: BeerStore) => state.beer[0]);

  console.log(beer);
  return (
    <div className="relative mx-auto mt-10">
      {isLoading || beer === undefined ? (
        <div className="custom-loader"></div>
      ) : (
        <div className="flex justify-evenly">
          <div className="w-32">
            <img
              src={
                beer.image_url === "https://images.punkapi.com/v2/keg.png"
                  ? beerImg
                  : beer.image_url
              }
              alt={beer.name}
            />
          </div>
          <div className="w-3/6">
            <Link
              to="/"
              className="absolute -top-2 right-48 font-semibold text-lg hover:text-cyan-700 hover:-translate-y-0.5 duration-300"
            >
              &larr; Back to all
            </Link>

            <h2 className="font-semibold text-2xl">{beer.name}</h2>
            <p className="max-w-lg my-4">{beer.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBeer;
